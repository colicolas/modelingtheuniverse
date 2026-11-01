'use client';
import { useMemo, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import type { Entry } from '@/lib/entries';
import { searchEntries } from '@/lib/search';
import { Arrow } from './icons';
const categories = ['All entries', 'Inner life', 'Relationships', 'Society', 'Expression'];
export function EntryIndex({ entries, compact = false }: { entries: Entry[]; compact?: boolean }) {
 const [query,setQuery]=useState(''); const [category,setCategory]=useState('All entries'); const input=useRef<HTMLInputElement>(null);
 useEffect(()=>{const handler=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();input.current?.focus();}}; window.addEventListener('keydown',handler);return ()=>window.removeEventListener('keydown',handler);},[]);
 const results=useMemo(()=>searchEntries(entries,query,category),[query,category,entries]);
 const shown=compact&&!query&&category==='All entries'?results.slice(0,6):results;
 return <div className="entry-index"><div className="search-wrap"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><input ref={input} type="search" value={query} onChange={e=>setQuery(e.target.value)} aria-label="Find a term" placeholder="Find a term"/><kbd>⌘ / Ctrl K</kbd></div><div className="filter-row" role="group" aria-label="Filter by category">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} aria-pressed={category===c} className={category===c?'filter active':'filter'}>{c}</button>)}<span className="entry-count" aria-live="polite">{results.length} terms</span></div><div className="term-list">{shown.map(e=><Link key={e.slug} className="term-link" href={`/entries/${e.slug}`}><span className="term-name">{e.title}</span><span className="term-category">{e.category}</span><Arrow/></Link>)}</div>{!results.length&&<div className="empty-state"><h3>No terms found.</h3><p>Try a broader idea, such as “language,” “learning,” or “power.”</p><button className="text-link" onClick={()=>{setQuery('');setCategory('All entries');}}>Clear search and filters <Arrow/></button></div>}{compact&&shown.length<results.length&&<Link className="all-entries" href="/entries">View all {entries.length} terms <Arrow/></Link>}</div>;
}
