import Link from 'next/link';
export function Header() {
  return <header className="site-header"><Link href="/" className="brand" aria-label="Modeling the universe home">modeling the universe<span className="brand-period">.</span></Link><nav aria-label="Main navigation"><Link href="/#the-model">The model</Link><Link href="/entries">Index</Link><Link href="/#origins" className="nav-origins">Sources</Link></nav></header>;
}
export function Footer() {
  return <footer className="site-footer"><span>Demi Zheng · Modeling the universe</span><a href="/original-draft.pdf" target="_blank" rel="noreferrer">Essay PDF ↗</a></footer>;
}
