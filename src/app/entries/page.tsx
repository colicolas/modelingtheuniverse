import type { Metadata } from 'next';
import { EntryIndex } from '@/components/entry-index';
import { getEntries } from '@/lib/entries';

export const metadata: Metadata = {
  title: 'Index',
  description: 'Applications of the model: behavior, relationships, language, and learning.',
};

export default function IndexPage() {
  return <main id="main" className="page-width full-index">
    <header><p className="index-kicker">Modeling the universe</p>
    <h1>Index of terms</h1>
    <p className="index-description">Follow the connections between ideas, or browse the list. Every point is a way into the model.</p></header>
    <EntryIndex entries={getEntries()}/>
    
  </main>;
}
