import content from '@/content/entries.json';

export type Entry = {
  slug: string;
  title: string;
  category: 'Inner life' | 'Relationships' | 'Society' | 'Expression';
  summary: string;
  tags: string[];
  sections: { heading: string; body: string; items?: { title: string; body: string }[] }[];
  question: string;
  related: string[];
};

// This repository boundary can later read published records from a database.
// Keep data serializable so a future authenticated editor can use the same schema.
export function getEntries(): Entry[] { return content as Entry[]; }
export function getEntry(slug: string): Entry | undefined {
  return getEntries().find(entry => entry.slug === slug);
}
export function getRelatedEntries(entry: Entry): Entry[] {
  return entry.related.flatMap(slug => { const result = getEntry(slug); return result ? [result] : []; });
}
