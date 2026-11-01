'use client';
import { useMemo, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import type { Entry } from '@/lib/entries';
import { searchEntries } from '@/lib/search';
import { EntryMap } from './entry-map';

const categories = ['All entries', 'Inner life', 'Relationships', 'Society', 'Expression'];
const categoryColors: Record<string,string> = { 'Inner life':'#7954a1', Relationships:'#488a87', Society:'#b17b50', Expression:'#a8668d' };
export function EntryIndex({ entries, compact = false }: { entries: Entry[]; compact?: boolean }) {
 const [query,setQuery]=useState('');
 const [category,setCategory]=useState('All entries');
 const [view,setView]=useState<'connections'|'list'>(compact?'list':'connections');
 const input=useRef<HTMLInputElement>(null);
 useEffect(()=>{
  const handler=(event:KeyboardEvent)=>{if((event.metaKey||event.ctrlKey)&&event.key==='k'){event.preventDefault();input.current?.focus();}};
  window.addEventListener('keydown',handler);
  if(!compact)try{const saved=localStorage.getItem('universe-index-view');if(saved==='connections'||saved==='list')setView(saved);}catch{}
  return ()=>window.removeEventListener('keydown',handler);
 },[compact]);
 const results=useMemo(()=>searchEntries(entries,query,category),[entries,query,category]);
 const filtered=Boolean(query.trim())||category!=='All entries';
 const shown=compact&&!filtered?results.slice(0,6):results;
 const chooseView=(next:'connections'|'list')=>{setView(next);try{localStorage.setItem('universe-index-view',next);}catch{}};
 return <div className={`entry-index index-view-${view}`}>
  <div className="index-tools"><div className="search-wrap"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><input ref={input} type="search" value={query} onChange={event=>setQuery(event.target.value)} aria-label="Find a term" placeholder="Find an idea or a connection"/><kbd>⌘ / Ctrl K</kbd></div>
   {!compact&&<div className="index-view-toggle" role="group" aria-label="Index view"><button type="button" aria-pressed={view==='connections'} onClick={()=>chooseView('connections')}><svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 5 10 2-5 8L5 5Zm0 0 0 10m0 0 5 0" stroke="currentColor" strokeWidth="1"/>{[[5,5],[15,7],[10,15],[5,15]].map(([x,y])=><circle key={`${x},${y}`} cx={x} cy={y} r="2" fill="currentColor"/>)}</svg>Connections</button><button type="button" aria-pressed={view==='list'} onClick={()=>chooseView('list')}><svg width="15" height="15" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M2 3h5v5H2zm9 0h5v5h-5zM2 11h5v5H2zm9 0h5v5h-5z" stroke="currentColor"/></svg>List</button></div>}
  </div>
  <div className="filter-row" role="group" aria-label="Filter by category">{categories.map(value=><button key={value} onClick={()=>setCategory(value)} aria-pressed={category===value} className={category===value?'filter active':'filter'}>{categoryColors[value]&&<i style={{background:categoryColors[value]}}/>}{value}</button>)}<span className="entry-count" aria-live="polite">{results.length} {results.length===1?'idea':'ideas'}</span></div>
  {results.length>0&&(view==='connections'&&!compact?<EntryMap key={`${category}:${query.trim()}`} entries={entries} matches={shown} filtered={filtered}/>:<div className="term-list compact-term-grid">{shown.map(entry=><Link key={entry.slug} className="term-link" href={`/entries/${entry.slug}`}><span className="term-category"><i style={{background:categoryColors[entry.category]}}/>{entry.category}</span><span className="term-name">{entry.title}</span><span className="term-open" aria-hidden="true">↗</span></Link>)}</div>)}
  {!results.length&&<div className="empty-state"><h3>No ideas found.</h3><p>Try a broader idea, such as “language,” “learning,” or “power.”</p><button className="text-link" onClick={()=>{setQuery('');setCategory('All entries');}}>Clear search and filters →</button></div>}
  {compact&&shown.length<results.length&&<Link className="all-entries" href="/entries">View all {entries.length} terms →</Link>}
 </div>;
}
