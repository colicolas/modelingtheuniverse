import type { Metadata } from 'next';
import Link from 'next/link';
import { versions } from './history';

export const metadata: Metadata = { title: 'Version history' };

export default function VersionHistory() {
  return (
    <main id="main" className="paper">
      <header className="paper-header">
        <h1>Version history</h1>
      </header>
      <ol className="version-timeline">
        {versions.map(({ date, label, title, summary, link }) => (
          <li key={title}>
            <time dateTime={date}>{label}</time>
            <h2>{title}</h2>
            <p>{summary}</p>
            {link && <Link className="text-link" href={link.href}>{link.label} →</Link>}
          </li>
        ))}
      </ol>
    </main>
  );
}
