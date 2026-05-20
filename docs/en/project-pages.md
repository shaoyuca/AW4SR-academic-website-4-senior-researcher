# Project Pages — Customization Guide

Each project listed on the About page has its own detail page at `/projects/<slug>`.  
All project page content lives in **one single file**:

```
content/projectDetails.tsx
```

You do **not** need to touch any other file.

---

## How routing works

Every project added to `content/about.tsx` **automatically gets a route** — no extra configuration needed. The same page template is used for all projects.

- **With content defined** → the full template is shown (title, description, images/videos, publication).
- **Without content defined** → the page shows the title and "coming soon."

---

## How to find a project's slug

The slug is derived from the project title in `content/about.tsx`:

| Title in about.tsx | Slug (key to use here) |
|---|---|
| `Project Alpha` | `project-alpha` |
| `Soft Robot Arm` | `soft-robot-arm` |
| `My Project (2024)` | `my-project-2024` |

**Easiest way:** click the project image on the About page and read the URL —  
`/projects/` followed by the slug is exactly the key you need.

---

## Adding a new project page

**Step 1** — Add the project to `content/about.tsx` (so it appears on the About page).  
**Step 2** — Add an entry to `content/projectDetails.tsx` with the matching slug:

```tsx
'your-project-slug': {
  description: 'A paragraph describing the project.',
  media: [ … ],          // optional
  publication: '…',      // optional
},
```

---

## Fields

### description

Plain text or rich text with links:

```tsx
// Plain text
description: 'A short paragraph about the project.',

// With a hyperlink
description: (
  <>
    A paragraph with a{' '}
    <InlineLink href="https://example.com" external>linked word</InlineLink>.
  </>
),
```

### media (optional)

Images and videos displayed in a two-column grid (one column on mobile).  
Mix images and videos freely — any combination works.

```tsx
media: [
  // Image
  { type: 'image', src: '/images/my-photo.jpg', alt: 'Description of the image' },

  // YouTube video
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/VIDEO_ID', title: 'Video title' },

  // Vimeo video
  { type: 'video', embedUrl: 'https://player.vimeo.com/video/VIDEO_ID', title: 'Video title' },
],
```

**How to get a YouTube embed URL:**  
Open the video → click **Share** → click **Embed** → copy the URL inside `src="…"`.

Images and videos are lazy-loaded — they only download when the user scrolls to them.

### publication (optional)

Paste a citation string in any format (Google Scholar, APA, etc.):

```tsx
publication: 'Author A, Author B. "Paper Title." Conference Name, Year.',
```

Displayed as plain body text under a "Publication" heading.

---

## Removing a field

`media` and `publication` are optional — delete the line to hide that section:

```tsx
'project-gamma': {
  description: 'Description only, no media or publication.',
},
```

---

## Quick reference — media types

| Type | Code |
|---|---|
| Image | `{ type: 'image', src: '/images/file.jpg', alt: '…' }` |
| YouTube | `{ type: 'video', embedUrl: 'https://www.youtube.com/embed/ID', title: '…' }` |
| Vimeo | `{ type: 'video', embedUrl: 'https://player.vimeo.com/video/ID', title: '…' }` |
