'use client';
import { useEffect } from 'react';

export function EssayControls() {
 useEffect(() => {
  const reveal = (hash: string) => {
   let id: string;
   try { id = decodeURIComponent(hash.replace(/^#/, '')); } catch { return; }
   const target = document.getElementById(id);
   if (!target) return;
   let ancestor: HTMLElement | null = target;
   while (ancestor) {
    if (ancestor instanceof HTMLDetailsElement) ancestor.open = true;
    ancestor = ancestor.parentElement;
   }
   requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  };
  const onHash = () => reveal(window.location.hash);
  const onLink = (event: MouseEvent) => {
   if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
   const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
   if (!(anchor instanceof HTMLAnchorElement)) return;
   const url = new URL(anchor.href);
   if (url.origin === location.origin && url.pathname === location.pathname && url.hash) reveal(url.hash);
  };
  if (location.hash) onHash();
  window.addEventListener('hashchange', onHash);
  document.addEventListener('click', onLink);
  return () => { window.removeEventListener('hashchange', onHash); document.removeEventListener('click', onLink); };
 }, []);
 const expand = (open: boolean) => {
  document.querySelectorAll<HTMLDetailsElement>(open ? '[data-collapsible]' : '[data-collapsible="section"]').forEach(section => { section.open = open; });
 };
 return <div className="essay-controls" role="group" aria-label="Article sections"><span>Read at your own pace</span><button type="button" onClick={() => expand(false)}>Collapse sections</button><button type="button" onClick={() => expand(true)}>Expand all</button></div>;
}
