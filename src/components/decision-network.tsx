'use client';

import { useEffect, useId, useRef, useState } from 'react';

type Point = { x: number; y: number; z: number; layer: number; row: number };
type Projected = Point & { scale: number };
const LAYERS = 5;
const ROWS = 7;
const points: Point[] = Array.from({ length: LAYERS * ROWS }, (_, index) => {
 const layer = Math.floor(index / ROWS);
 const row = index % ROWS;
 return { x: (layer - 2) * 100, y: (row - 3) * 30, z: Math.sin(index * 2.399) * 95, layer, row };
});
const connections = points.flatMap((point, index) => point.layer === LAYERS - 1 ? [] : [0, 1, -1].flatMap(offset => {
 const row = point.row + offset;
 return row < 0 || row >= ROWS ? [] : [[index, (point.layer + 1) * ROWS + row]];
}));

export function DecisionNetwork() {
 const [compare, setCompare] = useState(false);
 const [difference, setDifference] = useState(65);
 const [clarified, setClarified] = useState(false);
 const [playing, setPlaying] = useState(true);
 const [rotation, setRotation] = useState(12);
 const [reducedMotion, setReducedMotion] = useState(false);
 const canvasRef = useRef<HTMLCanvasElement>(null);
 const phaseRef = useRef(0);
 const id = useId();

 useEffect(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const update = () => { setReducedMotion(preference.matches); if (preference.matches) setPlaying(false); };
  update();
  preference.addEventListener('change', update);
  return () => preference.removeEventListener('change', update);
 }, []);

 useEffect(() => {
  const canvas = canvasRef.current;
  const context = canvas?.getContext('2d');
  if (!canvas || !context) return;
  let frame = 0;
  let visible = false;
  let lastTime = 0;
  let width = 900;
  let height = 390;
  const moving = playing && !reducedMotion;
  const draw = () => {
   const ctx = context;
   ctx.clearRect(0, 0, width, height);
   const mobile = width < 520;
   const sx = width / (mobile ? 520 : 900);
   const sy = height / (mobile && compare ? 740 : 390);
   ctx.save();
   ctx.scale(sx, sy);
   // Perspective projection gives each network real depth without a WebGL dependency.
   const angle = rotation * Math.PI / 180 + (moving ? Math.sin(phaseRef.current * .18) * .18 : 0);
   const project = (point: Point, center: number, person: number): Projected => {
    const spread = compare ? .71 : mobile ? .88 : 1.32;
    const mismatch = person === 1 ? difference / 100 : 0;
    const x = point.x * Math.cos(angle) + point.z * Math.sin(angle);
    const z = -point.x * Math.sin(angle) + point.z * Math.cos(angle);
    const y = point.y + Math.sin(point.layer * 1.8 + point.row) * mismatch * 38;
    const scale = 620 / (620 + z);
    return { ...point, x: center + x * scale * spread, y: 185 + (mobile && compare ? person * 340 : 0) + (y * .94 + z * .22) * scale, z, scale };
   };
   const paintNetwork = (center: number, person: number) => {
    const rgb = person === 0 ? '114,80,154' : '53,126,128';
    const offsetY = mobile && compare ? person * 340 : 0;
    const projected = points.map(point => project(point, center, person));
    const routeRows = [3, 3, person === 1 && difference > 35 && !clarified ? 4 : 3, person === 1 && difference > 65 && !clarified ? 5 : person === 1 && difference > 35 && !clarified ? 4 : 3, person === 1 && difference > 65 && !clarified ? 5 : person === 1 && difference > 35 && !clarified ? 4 : 3];
    const route = routeRows.map((row, layer) => projected[layer * ROWS + row]);
    // Faint orbital ellipses make the volume readable while leaving the routes prominent.
    ctx.save();
    ctx.strokeStyle = `rgba(${rgb},.09)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(center, 185 + offsetY, compare ? 190 : mobile ? 210 : 305, 115, -.12, 0, Math.PI * 2);
    ctx.stroke();
    connections.forEach(([a, b]) => {
     const start = projected[a], end = projected[b];
     ctx.strokeStyle = `rgba(${rgb},${.06 + (start.scale + end.scale) * .035})`;
     ctx.beginPath(); ctx.moveTo(start.x, start.y); ctx.lineTo(end.x, end.y); ctx.stroke();
    });
    ctx.lineWidth = 2;
    for (let i = 0; i < route.length - 1; i++) {
     const start = route[i], end = route[i + 1];
     ctx.strokeStyle = `rgba(${rgb},.7)`;
     ctx.beginPath(); ctx.moveTo(start.x, start.y); ctx.lineTo(end.x, end.y); ctx.stroke();
    }
    [...projected].sort((a,b) => b.z - a.z).forEach(point => {
     const selected = route.includes(point);
     ctx.fillStyle = `rgba(${rgb},${selected ? .95 : .18 + point.scale * .15})`;
     ctx.beginPath(); ctx.arc(point.x, point.y, (selected ? 4.3 : 2.2) * point.scale, 0, Math.PI * 2); ctx.fill();
     if (selected) {
      ctx.strokeStyle = `rgba(${rgb},.12)`; ctx.lineWidth = 5;
      ctx.beginPath(); ctx.arc(point.x, point.y, 7 * point.scale, 0, Math.PI * 2); ctx.stroke();
     }
    });
    if (moving) {
     const progress = (phaseRef.current * .65) % 4;
     const edge = Math.floor(progress), fraction = progress - edge;
     const start = route[edge], end = route[edge + 1];
     const x = start.x + (end.x - start.x) * fraction;
     const y = start.y + (end.y - start.y) * fraction;
     ctx.shadowColor = `rgba(${rgb},.8)`; ctx.shadowBlur = 14;
     ctx.fillStyle = `rgb(${rgb})`; ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2); ctx.fill(); ctx.shadowBlur = 0;
    }
    ctx.font = `${mobile ? 15 : 12}px Arial, sans-serif`;
    ctx.fillStyle = `rgb(${rgb})`; ctx.textAlign = 'center';
    ctx.fillText(person === 0 ? (compare ? 'PERSON A' : 'A LEARNED WORLD') : 'PERSON B', center, 44 + offsetY);
    if (!compare) {
     const labels = mobile ? ['Experience', 'Action', 'Outcome', 'Value', 'Decision'] : ['Experience', 'Possible action', 'Expected outcome', 'Value', 'Decision'];
     route.forEach((point,i) => { ctx.fillStyle = '#625e68'; ctx.fillText(labels[i],point.x,326); });
    } else {
     ctx.fillStyle = '#625e68';
     ctx.fillText(person === 0 ? 'Question → interest → connection' : clarified ? 'Stated intention → reconsideration' : difference > 35 ? 'Question → uncertainty → protection' : 'Question → interest → connection', center, 326 + offsetY);
    }
    ctx.restore();
    return route;
   };
   if (compare) {
    const a = paintNetwork(mobile ? 260 : 225, 0);
    const b = paintNetwork(mobile ? 260 : 675, 1);
    const start = a[4], end = b[0];
    ctx.strokeStyle = clarified ? 'rgba(53,126,128,.8)' : 'rgba(114,80,154,.4)';
    ctx.lineWidth = 1.5; ctx.setLineDash(clarified ? [] : [4,6]);
    ctx.beginPath(); ctx.moveTo(start.x,start.y); if (mobile) ctx.bezierCurveTo(500,start.y+95,20,end.y-95,end.x,end.y); else ctx.bezierCurveTo(430,80,470,80,end.x,end.y); ctx.stroke(); ctx.setLineDash([]);
    ctx.font = `italic ${mobile ? 17 : 13}px Georgia, serif`; ctx.textAlign = 'center'; ctx.fillStyle = '#625e68';
    ctx.fillText(clarified ? '“I want to understand.”' : '“Why did you do that?”',mobile ? 260 : 450,mobile ? 365 : 88);
    ctx.font = `${mobile ? 14 : 11}px Arial, sans-serif`; ctx.fillStyle = '#877c91';
    ctx.fillText(clarified ? 'An intention made explicit' : 'The same words cross different histories',mobile ? 260 : 450,mobile ? 716 : 358);
   } else paintNetwork(mobile ? 260 : 450, 0);
   ctx.restore();
  };
  const animate = (time: number) => {
   frame = 0;
   if (!visible || document.hidden) { lastTime = 0; return; }
   if (lastTime) phaseRef.current += Math.min((time-lastTime)/1000,.05);
   lastTime = time; draw();
   if (moving) frame = requestAnimationFrame(animate);
  };
  const refresh = () => {
   if (frame) cancelAnimationFrame(frame);
   frame = 0; lastTime = 0; draw();
   if (visible && !document.hidden && moving) frame = requestAnimationFrame(animate);
  };
  const resize = new ResizeObserver(entries => {
   const rect = entries[0].contentRect;
   if (!rect.width || !rect.height) return;
   width = rect.width; height = rect.height;
   const ratio = Math.min(window.devicePixelRatio || 1,2);
   canvas.width = Math.round(width*ratio); canvas.height = Math.round(height*ratio);
   context.setTransform(ratio,0,0,ratio,0,0); refresh();
  });
  const intersection = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; refresh(); });
  resize.observe(canvas); intersection.observe(canvas);
  document.addEventListener('visibilitychange', refresh);
  return () => { if (frame) cancelAnimationFrame(frame); resize.disconnect(); intersection.disconnect(); document.removeEventListener('visibilitychange', refresh); };
 }, [compare, difference, clarified, playing, rotation, reducedMotion]);

 const expectation = difference < 30 ? 'A request for information' : difference < 65 ? 'An uncertain intention' : 'Possible criticism or a threat';
 return <figure className="decision-network model-figure" aria-labelledby={`${id}-heading`}>
  <header className="network-header"><p className="network-kicker">An illustration of the model</p><h4 id={`${id}-heading`}>{compare ? 'The same words. Two learned worlds.' : 'From experience to a decision.'}</h4><p>{compare ? 'Different histories can give the same question different consequences.' : 'Follow a possible route through a web of learned associations.'}</p></header>
  <div className="graph-options" role="group" aria-label="Explore decision networks"><button type="button" aria-pressed={!compare} onClick={()=>setCompare(false)}>One person</button><button type="button" aria-pressed={compare} onClick={()=>setCompare(true)}>Compare two people</button></div>
  <div className={`network-space ${compare ? 'comparing' : ''}`}><canvas ref={canvasRef} role="img" aria-label={compare ? `Two networks interpret a question. Person A intends interest. Person B expects ${expectation.toLowerCase()}. ${clarified ? 'Person A has made the intention explicit, opening a chance to reconsider.' : 'The intention has not been explained.'}` : 'A three-dimensional network with an illuminated route from experience through a possible action, expected outcome, and value to a decision.'}>A conceptual network of experiences, actions, consequences, and values. Use the controls and descriptions below to explore it.</canvas></div>
  <div className="network-view-controls"><label htmlFor={`${id}-rotation`}>Rotate the view<input id={`${id}-rotation`} type="range" min="-55" max="55" value={rotation} onChange={event=>setRotation(Number(event.target.value))}/></label><button type="button" className="text-link" disabled={reducedMotion} onClick={()=>setPlaying(!playing)}>{reducedMotion ? 'Reduced motion enabled' : playing ? 'Pause motion' : 'Play motion'}</button></div>
  {compare && <div className="network-comparison">
   <label className="network-gap-control" htmlFor={`${id}-gap`}>Difference in learned expectations<input id={`${id}-gap`} type="range" min="0" max="100" value={difference} aria-valuetext={difference < 30 ? 'Similar expectations' : difference < 65 ? 'Some differences' : 'Further apart'} onChange={event=>setDifference(Number(event.target.value))}/><span><small>Similar</small><small>Further apart</small></span></label>
   <div className="network-perspectives"><div><span>Person A intends</span><p>A request for information</p></div><div><span>Person B anticipates</span><p>{expectation}</p></div></div>
   <button type="button" className="network-clarify" aria-pressed={clarified} onClick={()=>setClarified(!clarified)}>{clarified ? 'Leave the intention unspoken' : 'Explain the intention'}</button>
   <p className="network-explanation" aria-live="polite">{clarified ? '“I’m asking because I want to understand.” Stating the intention gives Person B another piece of information. Their history remains different, and trust or agreement may still take work.' : difference < 30 ? 'The assumed meaning and the listener’s expectation are close. Less explanation may be needed in this encounter.' : 'Person A assumes the question will communicate interest. Person B may anticipate a different consequence. Without checking that expectation, both people can leave with different accounts of what was said.'}</p>
  </div>}
  <figcaption>{!compare && <span>Learned associations inform predictions. The value assigned to an outcome helps shape which action is taken or avoided.</span>}<small>Conceptual positions and routes, not measured brain activity. The comparison illustrates the proposed “error threshold” without assigning a neurological score. Clarification changes the information available, not the other person’s history.</small></figcaption>
 </figure>;
}
