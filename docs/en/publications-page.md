# Publications Page — Customization Guide

All content on the Publications page lives in **one single file**:

```
content/publications.tsx
```

Open that file and edit the `PUBLICATIONS` array.  
You do **not** need to touch any other file.

---

## Structure overview

Papers are grouped by year. Each year is an H2 heading followed by its papers:

```tsx
export const PUBLICATIONS = [
  {
    year: 2026,
    papers: [ … ],
  },
  {
    year: 2025,
    papers: [ … ],
  },
]
```

Keep years in **descending order** (newest first).

---

## Adding a paper

Copy any existing paper block and paste it inside the correct year's `papers` array:

```tsx
{
  title: 'Your Paper Title Here',
  authors: <>Author A, <Strong>Author B</Strong>, Author C</>,
  venue: 'In CHI 2026, Honolulu, Hawaii, USA. ACM, New York, NY, USA, 12 pages.',
  links: [
    { label: 'PDF',   href: 'https://dl.acm.org/…' },
    { label: 'Video', href: 'https://example.com' },
  ],
},
```

## Removing a paper

Delete the entire `{ title: …, authors: …, … },` block for that entry.

---

## Adding a new year

Copy an existing `{ year: …, papers: […] }` block, change the year number, and add your papers:

```tsx
{
  year: 2024,
  papers: [
    { … },
  ],
},
```

## Removing a year

Delete the entire `{ year: …, papers: […] },` block.

---

## Authors

The `authors` field is **italic by default**. Two markers are available and are fully independent — a person can have either, both, or neither:

| Effect | Code |
|---|---|
| Plain name | `Bob Smith` |
| Lab owner — **bold** | `<Strong>Alice Chen</Strong>` |
| Corresponding author — superscript `*` | `Bob Smith<Corresponding />` |
| Both bold and corresponding | `<Strong>Alice Chen</Strong><Corresponding />` |

### Examples

Lab owner and corresponding author are the **same** person:
```tsx
authors: <><Strong>Alice Chen</Strong><Corresponding />, Bob Smith, Carol Williams</>
```

Lab owner and corresponding author are **different** people:
```tsx
authors: <>Bob Smith<Corresponding />, <Strong>Alice Chen</Strong>, Carol Williams</>
```

Lab owner appears later in the list, someone else is corresponding:
```tsx
authors: <>Carol Williams<Corresponding />, David Lee, <Strong>Alice Chen</Strong></>
```

---

## Venue

Plain string — paste the full venue text as-is, no bold needed:

```tsx
venue: 'In CHI 2026, Honolulu, Hawaii, USA. ACM, New York, NY, USA, 14 pages.',
```

---

## Award (optional)

If the paper received an award, add the `award` field. It appears above the links row.  
**Omit the line entirely** if there is no award.

```tsx
award: <>🏆 Best Paper Award — CHI 2026</>,
```

Use the 🏆 emoji to stay consistent with the Portfolio page style.

---

## Links

Add any number of links. Each appears as underlined text:

```tsx
links: [
  { label: 'PDF',   href: 'https://dl.acm.org/doi/…' },
  { label: 'Video', href: 'https://example.com' },
  { label: 'Code',  href: 'https://github.com/…' },
  { label: 'Talk',  href: 'https://example.com' },
],
```

Use external URLs only (ACM DL, arXiv, institution repository, etc.).

---

## Corresponding author footnote

To show a footnote at the bottom of the page (e.g. "* Corresponding author"), set `CORRESPONDING_NOTE`:

```ts
export const CORRESPONDING_NOTE = '* Corresponding author'
```

To hide the footnote, set it to an empty string:

```ts
export const CORRESPONDING_NOTE = ''
```

---

## Quick reference — author markers

| Marker | Meaning | Code |
|---|---|---|
| `<Strong>` | Lab owner / highlighted author | `<Strong>Name</Strong>` |
| `<Corresponding />` | Corresponding author (superscript `*`) | `Name<Corresponding />` |
