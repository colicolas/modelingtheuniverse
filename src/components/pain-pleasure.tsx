'use client';
import { useId, useState } from 'react';

const views = [
  { name: 'Relief', path: 'M 65 72 C 150 72 155 72 210 72 S 285 197 380 197 S 510 197 595 197', detail: 'An action relieves pain, and the relief lasts.' },
  { name: 'Temporary relief', path: 'M 65 72 C 145 72 160 72 210 72 S 280 197 350 197 S 450 100 510 85 S 560 72 595 72', detail: 'An action brings relief, but the original pain returns.' },
  { name: 'A later cost', path: 'M 65 100 C 145 100 160 100 210 100 S 280 197 350 197 S 460 46 520 42 S 565 42 595 42', detail: 'An action brings relief now, followed by more pain later.' },
];
export function PainPleasure() {
  const id = useId();
  const [selected, setSelected] = useState(0);
  const view = views[selected];
  return <figure className="pain-figure">
    <div className="graph-options" role="group" aria-label="Illustrative pain patterns">{views.map((item, i) => <button type="button" key={item.name} onClick={() => setSelected(i)} aria-pressed={selected === i}>{item.name}</button>)}</div>
    <svg viewBox="0 0 660 270" role="img" aria-labelledby={`${id}-title ${id}-description`}>
      <title id={`${id}-title`}>{`Pain before and after an action: ${view.name.toLowerCase()}`}</title><desc id={`${id}-description`}>{view.detail} Pain increases upward; time runs left to right. The lower line represents freedom from pain.</desc>
      <line className="graph-axis" x1="65" y1="30" x2="65" y2="210"/><line className="graph-baseline" x1="65" y1="205" x2="610" y2="205"/>
      <line className="graph-event" x1="230" y1="30" x2="230" y2="210"/>
      <text x="65" y="18">More pain</text><text x="65" y="232">Before</text><text x="230" y="254" textAnchor="middle">An action</text><text x="595" y="232" textAnchor="end">After →</text><text x="610" y="191" textAnchor="end">Freedom from pain</text>
      <path key={selected} className="pain-curve" d={view.path} pathLength="1"/>
    </svg>
    <figcaption><span aria-live="polite">{view.detail}</span><small>Figure 1. Possible courses of pain over time. A conceptual sketch, not measured data.</small></figcaption>
  </figure>;
}
