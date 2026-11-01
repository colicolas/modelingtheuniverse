import type { Entry } from './entries';

/** Search every query word across the entry, then apply the selected category. */
export function searchEntries(entries: Entry[], query: string, category = 'All entries'): Entry[] {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);

  return entries.filter(entry => {
    if (category !== 'All entries' && entry.category !== category) return false;

    const text = [
      entry.title,
      entry.summary,
      ...entry.tags,
      ...entry.sections.flatMap(section => [section.heading, section.body]),
    ].join(' ').toLowerCase();

    return terms.every(term => text.includes(term));
  });
}
