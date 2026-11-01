import type { Entry } from './entries';

export type GraphNode = { entry: Entry; x: number; y: number; degree: number };
export type GraphEdge = { source: string; target: string };

export function buildEntryGraph(entries: Entry[]): { nodes: GraphNode[]; edges: GraphEdge[] } {
 const known = new Set(entries.map(entry => entry.slug));
 const seen = new Set<string>();
 const edges: GraphEdge[] = [];
 for (const entry of entries) for (const related of entry.related) {
  if (!known.has(related) || related === entry.slug) continue;
  const pair = [entry.slug, related].sort();
  const key = pair.join(':');
  if (!seen.has(key)) { seen.add(key); edges.push({ source: pair[0], target: pair[1] }); }
 }
 const degrees = new Map<string, number>();
 edges.forEach(edge => { for (const slug of [edge.source, edge.target]) degrees.set(slug, (degrees.get(slug) ?? 0) + 1); });
 const anchors: Record<Entry['category'], [number, number]> = { 'Inner life': [-210,-130], Relationships: [220,20], Society: [-30,180], Expression: [-240,170] };
 const nodes = entries.map((entry, index) => {
  const angle = index * 2.399963;
  return { entry, x: Math.cos(angle) * 290, y: Math.sin(angle) * 240, degree: degrees.get(entry.slug) ?? 0 };
 });
 const bySlug = new Map(nodes.map((node, i) => [node.entry.slug, i]));
 const velocity = nodes.map(() => ({ x: 0, y: 0 }));
 // Settle once; reading and exploring the graph do not require a continuous simulation.
 for (let iteration = 0; iteration < 260; iteration++) {
  const force = nodes.map(node => {
   const [x,y] = anchors[node.entry.category];
   return { x: (x-node.x)*.008, y: (y-node.y)*.008 };
  });
  for (let i=0;i<nodes.length;i++) for (let j=i+1;j<nodes.length;j++) {
   const a=nodes[i], b=nodes[j];
   const dx=b.x-a.x || .01, dy=b.y-a.y || .01;
   const distance=Math.max(20,Math.hypot(dx,dy));
   const repulsion=5800/(distance*distance);
   force[i].x-=dx/distance*repulsion; force[i].y-=dy/distance*repulsion;
   force[j].x+=dx/distance*repulsion; force[j].y+=dy/distance*repulsion;
   const labelWidth = (node: GraphNode) => Math.min(190, Math.max(100,node.entry.title.length*6.5));
   const overlapX=(labelWidth(a)+labelWidth(b))/2+22-Math.abs(dx);
   const overlapY=68-Math.abs(dy);
   if (overlapX>0 && overlapY>0) {
    if (overlapX<overlapY) { const push=Math.sign(dx)*overlapX*.14;force[i].x-=push;force[j].x+=push; }
    else { const push=Math.sign(dy)*overlapY*.14;force[i].y-=push;force[j].y+=push; }
   }
  }
  for (const edge of edges) {
   const i=bySlug.get(edge.source)!, j=bySlug.get(edge.target)!;
   const dx=nodes[j].x-nodes[i].x, dy=nodes[j].y-nodes[i].y;
   const distance=Math.max(1,Math.hypot(dx,dy));
   const pull=(distance-170)*.007;
   force[i].x+=dx/distance*pull;force[i].y+=dy/distance*pull;
   force[j].x-=dx/distance*pull;force[j].y-=dy/distance*pull;
  }
  const speed=9*(1-iteration/300);
  nodes.forEach((node,i) => {
   velocity[i].x=(velocity[i].x+force[i].x)*.72;
   velocity[i].y=(velocity[i].y+force[i].y)*.72;
   node.x+=Math.max(-speed,Math.min(speed,velocity[i].x));
   node.y+=Math.max(-speed,Math.min(speed,velocity[i].y));
  });
 }
 // Math.sin/cos/hypot can differ in the final bits between JS runtimes.
 // Keep full precision during simulation, then serialize stable SVG coordinates.
 return {
  nodes: nodes.map(node => ({ ...node, x: Number(node.x.toFixed(3)), y: Number(node.y.toFixed(3)) })),
  edges,
 };
}
