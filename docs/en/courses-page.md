# Courses Page — Customization Guide

All content on the Courses page lives in **one single file**:

```
content/courses.tsx
```

Open that file. Every course is stored inside the `COURSES` array.  
You do **not** need to touch any other file.

---

## 1. Course Blocks

Each course is one `{ … },` block:

```tsx
{
  title: 'Interactive Systems Studio',
  href: 'https://example.edu/courses/interactive-systems-studio',
  linkLabel: 'Course website',
  description: (
    <>
      Write the course description here.
    </>
  ),
}
```

This creates:

- a large course title
- an external course link
- a course description
- optional video embeds
- optional Student Work section

---

## Adding a Course

Copy one full course block and paste it inside `COURSES`:

```tsx
{
  title: 'New Course Title',
  href: 'https://example.edu/course-page',
  linkLabel: 'Course website',
  description: (
    <>
      A short description of the course.
    </>
  ),
},
```

## Removing a Course

Delete the entire `{ … },` block for that course.

---

## Course Link

Edit `href` and `linkLabel`:

```tsx
href: 'https://example.edu/course-page',
linkLabel: 'Course website',
```

- `href` is the external course URL.
- `linkLabel` is the clickable text shown on the page.

---

## Course Description

### Plain Text

Edit the text between `<>` and `</>`:

```tsx
description: (
  <>
    This course introduces prototyping, critique, and evaluation methods.
  </>
),
```

### With a Link

Use `<InlineLink>` inside the description:

```tsx
description: (
  <>
    Students may reference{' '}
    <InlineLink href="https://www.w3.org/WAI/" external>
      accessibility guidelines
    </InlineLink>{' '}
    during project evaluation.
  </>
),
```

- `external` should be included for links to other websites.
- Remove `external` for links to pages inside this website.

---

## Videos

Videos are shown through **external embed links**. Do not upload video files into the website.

Add a `videos` array to a course:

```tsx
videos: [
  {
    title: 'Course overview video',
    src: 'https://www.youtube.com/embed/VIDEO_ID',
  },
  {
    title: 'Student showcase video',
    src: 'https://player.vimeo.com/video/VIDEO_ID',
  },
],
```

The page is responsive:

- one video per row on mobile
- up to two videos per row on wider screens

### Removing Videos

If a course has no videos, delete the entire `videos: [ … ],` block.

---

## Student Work

Add `studentWork` when you want to show the optional `Student Work` section:

```tsx
studentWork:
  'Students produce working prototypes, short reports, and final demonstrations.',
```

To hide the `Student Work` section for a course, delete the `studentWork` line.

---

## Quick Reference

| Goal | What to edit |
|---|---|
| Change course title | `title` |
| Change course link | `href` |
| Change link text | `linkLabel` |
| Change description | `description` |
| Add videos | add `videos: [ … ]` |
| Hide videos | delete `videos: [ … ]` |
| Add Student Work | add `studentWork` |
| Hide Student Work | delete `studentWork` |

Use original wording for course descriptions and student work summaries. Do not copy text from other course websites unless you have permission.
