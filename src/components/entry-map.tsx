'use client';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import type { PointerEvent as ReactPointerEvent } from 'react';
import type { Entry } from '@/lib/entries';
import { buildEntryGraph } from '@/lib/entry-graph';

const colors: Record<Entry['category'], string> = { 'Inner life':'#7954a1', Relationships:'#488a87', Society:'#b17b50', Expression:'#a8668d' };
function titleLines(title: string): string[] {
 if (title.length<=25) return [title];
 const words=title.split(' ');let split=1;
 for(let i=1;i<words.length;i++) if(Math.abs(words.slice(0,i).join(' ').length-title.length/2)<Math.abs(words.slice(0,split).join(' ').length-title.length/2)) split=i;
 return [words.slice(0,split).join(' '),words.slice(split).join(' ')];
}
type Camera = { x:number; y:number; zoom:number };
type Gesture = { slug?:string; x:number; y:number; camera:Camera; origin?:{x:number;y:number}; moved:boolean };

export function EntryMap({ entries, matches, filtered }: { entries: Entry[]; matches: Entry[]; filtered: boolean }) {
 const graph=useMemo(()=>buildEntryGraph(entries),[entries]);
 const [selected,setSelected]=useState<string|null>(null);
 const [hovered,setHovered]=useState<string|null>(null);
 const [offsets,setOffsets]=useState<Partial<Record<string,{x:number;y:number}>>>({});
 const [size,setSize]=useState({width:1000,height:600});
 const [camera,setCamera]=useState<Camera>({x:500,y:300,zoom:1});
 const root=useRef<HTMLDivElement>(null);
 const svg=useRef<SVGSVGElement>(null);
 const gesture=useRef<Gesture|null>(null);
 const pendingFocus=useRef<string|null>(null);
 const id=useId();
 const allSlugs=useMemo(()=>new Set(entries.map(entry=>entry.slug)),[entries]);
 const matchSet=useMemo(()=>new Set(matches.map(entry=>entry.slug)),[matches]);
 const visibleSet=useMemo(()=>{
  if(!filtered) return allSlugs;
  const result=new Set(matchSet);
  if(selected)result.add(selected);
  graph.edges.forEach(edge=>{if(matchSet.has(edge.source)||matchSet.has(edge.target)||edge.source===selected||edge.target===selected){result.add(edge.source);result.add(edge.target);}});
  return result;
 },[allSlugs,filtered,graph.edges,matchSet,selected]);
 const nodes=useMemo(()=>{
  const visible=graph.nodes.filter(node=>visibleSet.has(node.entry.slug));
  if(size.width>=600)return visible.map(node=>({...node,...offsets[node.entry.slug]}));
  // Give labels room in a tall, narrow viewport rather than shrinking the whole web.
  return [...visible].sort((a,b)=>a.y-b.y).map((node,index)=>({
   ...node,
   x:index===visible.length-1&&visible.length%2===1?0:(index%2===0?-122:122)+Math.sin(index*2.4)*12,
   y:(Math.floor(index/2)-(Math.ceil(visible.length/2)-1)/2)*80,
   ...offsets[node.entry.slug],
  }));
 },[graph.nodes,visibleSet,offsets,size.width]);
 const bySlug=new Map(nodes.map(node=>[node.entry.slug,node]));
 const edges=graph.edges.filter(edge=>visibleSet.has(edge.source)&&visibleSet.has(edge.target));
 const focused=selected&&visibleSet.has(selected)?selected:null;
 const spotlight=hovered??focused;
 const neighbors=new Set<string>();
 if(spotlight) edges.forEach(edge=>{if(edge.source===spotlight) neighbors.add(edge.target);if(edge.target===spotlight) neighbors.add(edge.source);});
 const current=focused?bySlug.get(focused)?.entry:undefined;
 const connected=current?entries.filter(entry=>graph.edges.some(edge=>(edge.source===current.slug&&edge.target===entry.slug)||(edge.target===current.slug&&edge.source===entry.slug))):[];
 const fit=useMemo(()=>{
  if(!nodes.length)return {x:size.width/2,y:size.height/2,zoom:1};
  const minX=Math.min(...nodes.map(n=>n.x))-115,maxX=Math.max(...nodes.map(n=>n.x))+115;
  const minY=Math.min(...nodes.map(n=>n.y))-55,maxY=Math.max(...nodes.map(n=>n.y))+65;
  const zoom=Math.min(1.35,(size.width-40)/(maxX-minX),(size.height-60)/(maxY-minY));
  return {x:size.width/2-(minX+maxX)/2*zoom,y:size.height/2-(minY+maxY)/2*zoom,zoom};
 },[nodes,size]);
 // Search and resizing refit the map; selecting or dragging keeps the chosen camera.
 useEffect(()=>setCamera(fit),[matches,filtered,size]);
 useEffect(()=>{
  const element=root.current;if(!element)return;
  const observer=new ResizeObserver(records=>{const {width,height}=records[0].contentRect;if(width&&height)setSize({width,height});});
  observer.observe(element);return ()=>observer.disconnect();
 },[]);
 useEffect(()=>{
  const slug=pendingFocus.current;
  if(!slug)return;
  const node=nodes.find(item=>item.entry.slug===slug);
  if(!node)return;
  pendingFocus.current=null;
  setCamera(view=>{
   const zoom=Math.max(view.zoom,size.width<600?.8:1.05);
   return {zoom,x:size.width/2-node.x*zoom,y:size.height/2-node.y*zoom};
  });
 },[nodes,size]);
 const zoom=(factor:number)=>setCamera(view=>{
  const next=Math.max(.25,Math.min(2.6,view.zoom*factor));
  const ratio=next/view.zoom;
  return {zoom:next,x:size.width/2+(view.x-size.width/2)*ratio,y:size.height/2+(view.y-size.height/2)*ratio};
 });
 const begin=(event:ReactPointerEvent<SVGSVGElement>,slug?:string)=>{
  if(event.button!==0)return;
  const node=slug?bySlug.get(slug):undefined;
  gesture.current={slug,x:event.clientX,y:event.clientY,camera:{...camera},origin:node?{x:node.x,y:node.y}:undefined,moved:false};
  event.currentTarget.setPointerCapture(event.pointerId);
 };
 const move=(event:ReactPointerEvent<SVGSVGElement>)=>{
  const active=gesture.current;if(!active)return;
  const dx=event.clientX-active.x,dy=event.clientY-active.y;
  if(Math.hypot(dx,dy)>5)active.moved=true;
  if(!active.moved)return;
  if(active.slug&&active.origin){
   const point={x:active.origin.x+dx/active.camera.zoom,y:active.origin.y+dy/active.camera.zoom};
   setOffsets(previous=>({...previous,[active.slug!]:point}));
  }else setCamera({...active.camera,x:active.camera.x+dx,y:active.camera.y+dy});
 };
 const finish=(event:ReactPointerEvent<SVGSVGElement>)=>{
  const active=gesture.current;gesture.current=null;
  if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);
  if(active&&!active.moved)setSelected(active.slug??null);
 };
 const select=(slug:string)=>{setSelected(slug);setHovered(null);};
 const focusNode=(slug:string)=>{
  if(filtered){pendingFocus.current=slug;select(slug);return;}
  select(slug);const node=bySlug.get(slug);if(!node)return;
  // Keep the focused neighborhood legible, including on a narrow screen.
  const zoom=Math.max(camera.zoom,size.width<600?.8:1.05);
  setCamera({zoom,x:size.width/2-node.x*zoom,y:size.height/2-node.y*zoom});
 };
 return <div className="entry-map">
  <div className="map-topline"><span><i/> {filtered?`${matches.length} matches, with connected ideas`:`${entries.length} ideas · ${graph.edges.length} connections`}</span><span>Select a point to follow its connections</span></div>
  <div ref={root} className="map-space">
   <svg ref={svg} className="connection-map" role="group" aria-labelledby={`${id}-title ${id}-description`} onPointerDown={event=>{
    const target=event.target instanceof Element?event.target.closest('[data-node]'):null;
    begin(event,target?.getAttribute('data-node')??undefined);
   }} onPointerMove={move} onPointerUp={finish} onPointerCancel={()=>{gesture.current=null;}}>
    <title id={`${id}-title`}>Connections between articles</title><desc id={`${id}-description`}>Each point is an article. Lines show related reading in either direction. Select an article to explore its neighbors and open the article below. Drag the background to pan, drag points to rearrange, or use the zoom buttons.</desc>
    <g transform={`translate(${camera.x} ${camera.y}) scale(${camera.zoom})`}>
     {edges.map(edge=>{
      const a=bySlug.get(edge.source)!,b=bySlug.get(edge.target)!;
      const active=spotlight&&(edge.source===spotlight||edge.target===spotlight);
      return <line key={`${edge.source}:${edge.target}`} className={`map-edge ${active?'active':''} ${spotlight&&!active?'muted':''}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} vectorEffect="non-scaling-stroke"/>;
     })}
     {nodes.map(node=>{
      const slug=node.entry.slug;const active=spotlight===slug;const adjacent=neighbors.has(slug);
      const dim=(spotlight&&!active&&!adjacent)||(filtered&&!matchSet.has(slug)&&!active&&!adjacent);
      const radius=5+Math.min(7,node.degree)*.6;
      const lines=titleLines(node.entry.title);
      return <g key={slug} data-node={slug} role="button" tabIndex={0} aria-label={`${node.entry.title}, ${node.degree} connections. Select to explore.`} aria-pressed={focused===slug} className={`map-node ${dim?'dimmed':''} ${active?'selected':''} ${adjacent?'neighbor':''}`} transform={`translate(${node.x} ${node.y})`} onClick={event=>{if(event.detail===0)focusNode(slug);}} onMouseEnter={()=>{if(!gesture.current)setHovered(slug);}} onMouseLeave={()=>setHovered(null)} onFocus={()=>setHovered(slug)} onBlur={()=>setHovered(null)} onKeyDown={event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();focusNode(slug);}if(event.key==='Escape'){setSelected(null);setHovered(null);}}}>
       <circle className="map-node-hit" r="25" fill="transparent"/>
       <circle className="map-node-halo" r={radius+7} fill={colors[node.entry.category]}/>
       <circle className="map-node-dot" r={radius} fill={colors[node.entry.category]}/>
       <text textAnchor="middle" y={radius+18} fontSize={Math.max(12,10.5/camera.zoom)}>{lines.map((line,i)=><tspan key={line} x="0" dy={i===0?0:Math.max(15,14/camera.zoom)}>{line}</tspan>)}</text>
      </g>;
     })}
    </g>
   </svg>
   <div className="map-zoom" role="group" aria-label="Map zoom"><button type="button" aria-label="Zoom in" onClick={()=>zoom(1.25)}>+</button><button type="button" aria-label="Zoom out" onClick={()=>zoom(.8)}>−</button><button type="button" aria-label="Fit all visible ideas" onClick={()=>setCamera(fit)}><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 2H2v4m8-4h4v4M2 10v4h4m8-4v4h-4" stroke="currentColor" strokeWidth="1.3"/></svg></button></div>
   <span className="map-gesture-hint">Drag to move · + / − to zoom</span>
  </div>
  <div className={`map-reading ${current?'has-selection':''}`} aria-live="polite">
   {current?<><div className="map-reading-main"><span className="map-category" style={{color:colors[current.category]}}>{current.category}</span><h2><Link href={`/entries/${current.slug}`}>{current.title} <span aria-hidden="true">↗</span></Link></h2><p>{current.summary}</p><Link className="text-link" href={`/entries/${current.slug}`}>Read the article →</Link></div><div className="map-related"><span>Follow a connection</span><div>{connected.map(entry=><button type="button" key={entry.slug} onClick={()=>focusNode(entry.slug)}>{entry.title}<span aria-hidden="true">↗</span></button>)}</div><button className="map-clear" type="button" onClick={()=>{setSelected(null);setHovered(null);setCamera(fit);}}>Back to the whole map</button></div></>:<p>Ideas rarely stand alone. Select an article to see what it connects to, then follow a thread.</p>}
  </div>
 </div>;
}
