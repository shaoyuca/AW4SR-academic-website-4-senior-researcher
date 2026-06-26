# Team Page — Customization Guide

All content on the Team page lives in **one single file**:

```
content/team.tsx
```

Open that file. Every section has comments explaining what each field does.  
You do **not** need to touch any other file.

---

## 1. Intro Paragraph

The paragraph below the `Team` title is controlled by `TEAM_INTRO`:

```tsx
export const TEAM_INTRO =
  'Write a short introduction to the lab, team culture, or research community here.'
```

Replace the text inside the quotes. Keep it as one or two concise sentences.

---

## 2. Team Sections

The page sections are controlled by `TEAM_SECTIONS`:

```tsx
export const TEAM_SECTIONS = [
  {
    title: 'Current',
    members: [
      'Research Fellow - short description.',
      'PhD Student - short description.',
    ],
  },
]
```

Each block creates:

- one H2 heading from `title`
- one bullet list from `members`

---

## Changing a Section Title

Edit the `title` value:

```tsx
{
  title: 'Current',
  members: [ … ],
},
```

Examples:

```tsx
title: 'Current'
title: 'Alumni'
title: 'Former Capstone Student'
```

---

## Adding a Member

Add a new line inside the `members` array:

```tsx
members: [
  'Research Fellow - studies interactive systems.',
  'New Member - write a short role or project description here.',
],
```

Each member should be wrapped in quotes and end with a comma.

---

## Removing a Member

Delete the entire line for that member:

```tsx
'New Member - write a short role or project description here.',
```

---

## Adding a New Section

Copy one full section block and paste it inside `TEAM_SECTIONS`:

```tsx
{
  title: 'Visitors',
  members: [
    'Visiting Scholar - short description.',
    'Exchange Student - short description.',
  ],
},
```

---

## Removing a Section

Delete the entire block:

```tsx
{
  title: 'Visitors',
  members: [
    'Visiting Scholar - short description.',
  ],
},
```

---

## Quick Reference

| Goal | What to edit |
|---|---|
| Change intro text | `TEAM_INTRO` |
| Change a heading | `title` |
| Add a person | add one string inside `members` |
| Remove a person | delete that member line |
| Add a section | copy and edit one `{ title, members }` block |

Keep placeholder text original or replace it with your own wording. Do not paste text from other websites unless you have permission to use it.
