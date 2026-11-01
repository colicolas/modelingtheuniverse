# modeling the universe

A local Next.js App Router project with TypeScript and Tailwind CSS. An evolving framework by Demi Zheng, adapted from `Very very rough draft - 8_11_26.pdf` and the accompanying brief.

## Run

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000. For production, run `npm run typecheck`, `npm run build`, then `npm start`.

## Content

- `/`: the full model, self-extension, hedonic premise, language and power, origins, and open questions.
- `/entries`: searchable index with category filters and Cmd/Ctrl+K search focus.
- `/entries/[slug]`: individual entries with related reading and source notes.
- `/original-draft.pdf`: a readable copy of the source PDF.

The entries adapt examples from the draft and include an additional entry on learning and association. The closing sticky-ball identity metaphor is omitted. The homepage uses a minimal light article layout, with an interactive conceptual pain graph followed by self-extension, learning, and language. Neuroscience and conditioning sources are linked in Sources & notes; connections to the author’s model are presented as interpretations.

## Adding an entry now

Add a record to `src/content/entries.json` using the `Entry` type in `src/lib/entries.ts`. Use a unique lowercase, hyphenated `slug`; select one of the four categories; add a summary, tags, a source note, sections, a reflection question, and related entry slugs. The index, search, metadata, and static route parameters derive from that collection.

## Future publishing interface

The reading UI uses the repository functions `getEntries`, `getEntry`, and `getRelatedEntries` rather than importing content directly. Keep this boundary when introducing a database or CMS. The serializable entry shape can serve as a starting point for an editor’s payload.

A future implementation should add server-side schema validation, authenticated author-only mutations, explicit draft/published states and revision history, persistent storage, and route revalidation after publishing. Migrate the repository functions to async calls as part of that change. There is intentionally no editor, upload endpoint, login, or pretend publishing control yet. Do not accept HTML or code from an editor without an appropriate rendering and sanitization policy.

## Verification in the creation environment

The npm registry was unavailable due to DNS restrictions. Full installation, TypeScript checking, the Tailwind compilation, and a production build require running the commands above in an environment with registry access. Using cached Next.js packages, every TypeScript/TSX module was parsed and transpiled with Next SWC, and the homepage, full index, and all 16 detail pages were server-rendered. Source data and all 42 related-entry links were checked. Search behavior was checked for blank queries, case folding, multiword matching, category filters, tag matches, and empty results. These checks do not replace a TypeScript check, Tailwind compilation, browser QA, or production build.
