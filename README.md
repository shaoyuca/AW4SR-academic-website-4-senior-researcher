# Academic Website for Senior Researchers

Most academic website templates are built for simplicity — a single page, a short bio, and a list of papers. That works for early-career researchers, but falls short for senior researchers who need to present a full body of work: multiple research directions, a growing publication record, an active team, ongoing courses, and project portfolios with rich media.

This template is built specifically for that audience.

---

## Running the Project Locally (From Scratch)

This section is for anyone who has never set up a web development environment before. Follow these steps in order — you only need to do the installation steps once.

### Step 1 — Open Terminal

On a Mac, press **Command + Space**, type `Terminal`, and press Enter.

### Step 2 — Install Homebrew

Homebrew is a package manager for macOS that makes it easy to install developer tools. Paste the following command into Terminal and press Enter:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the on-screen prompts. This may take a few minutes. When it finishes, run:

```bash
brew --version
```

If you see a version number, Homebrew is installed.

### Step 3 — Install Node.js

Node.js is the runtime that powers this project. Install it with:

```bash
brew install node
```

Verify the installation:

```bash
node --version
npm --version
```

Both commands should print a version number (e.g. `v20.x.x`).

### Step 4 — Download the Project

If you haven't already, download this repository. Either:
- Click **Code → Download ZIP** on GitHub, unzip it, and note the folder location, or
- Run `git clone https://github.com/lwwywang/AW4SR-academic-website-4-senior-researcher.git` in Terminal.

### Step 5 — Navigate to the Project Folder

In Terminal, type `cd ` (with a space after it), then drag the project folder from Finder into the Terminal window. Press Enter. You should now be inside the project folder.

### Step 6 — Install Dependencies

```bash
npm install
```

This downloads all the libraries the project needs. It only needs to run once (or again after a `git pull`).

### Step 7 — Start the Development Server

```bash
npm run dev
```

Open your browser and go to **http://localhost:3000**. You should see the website running locally.

To stop the server, press **Control + C** in Terminal.

---

## Editing Your Content

### Recommended editor

Download and install [Visual Studio Code](https://code.visualstudio.com/) (free). Open the project folder in VS Code by dragging it onto the VS Code icon, or via **File → Open Folder**.

### Where to make changes

All content lives in the `content/` folder. **You do not need to touch any other folder for routine edits.** The files use TypeScript (`.ts` / `.tsx`) — they look like plain text with some extra syntax. You only need to edit the values inside quote marks `'...'` or template areas; the structure around them stays the same.

| File | What it controls |
|---|---|
| `content/site.ts` | Your name, navigation bar links, custom pages, site title, meta description |
| `content/about.tsx` | Bio, photo, research directions, contact info |
| `content/news.tsx` | News items |
| `content/portfolio.tsx` | Portfolio hero section and project cards |
| `content/publications.tsx` | Publications list, grouped by year |
| `content/projectDetails.tsx` | Individual project detail pages |
| `content/team.tsx` | Team members |
| `content/courses.tsx` | Courses |
| `content/opportunities.tsx` | Recruitment / open positions |

### Start here

The first file to edit is **`content/site.ts`** — it controls your name and the navigation bar. Every other file follows the same pattern: find the value you want to change, edit the text between the quotes, and save.

### Per-page guides

Each page has a detailed editing guide in the `docs/` folder:

| Page | English | 中文 |
|---|---|---|
| Site settings & nav | [docs/en/site-settings.md](./docs/en/site-settings.md) | [docs/zh/site-settings.md](./docs/zh/site-settings.md) |
| About | [docs/en/about-page.md](./docs/en/about-page.md) | [docs/zh/about-page.md](./docs/zh/about-page.md) |
| News | [docs/en/news-page.md](./docs/en/news-page.md) | [docs/zh/news-page.md](./docs/zh/news-page.md) |
| Portfolio | [docs/en/portfolio-page.md](./docs/en/portfolio-page.md) | [docs/zh/portfolio-page.md](./docs/zh/portfolio-page.md) |
| Publications | [docs/en/publications-page.md](./docs/en/publications-page.md) | [docs/zh/publications-page.md](./docs/zh/publications-page.md) |
| Projects | [docs/en/project-pages.md](./docs/en/project-pages.md) | [docs/zh/project-pages.md](./docs/zh/project-pages.md) |
| Team | [docs/en/team-page.md](./docs/en/team-page.md) | [docs/zh/team-page.md](./docs/zh/team-page.md) |
| Courses | [docs/en/courses-page.md](./docs/en/courses-page.md) | [docs/zh/courses-page.md](./docs/zh/courses-page.md) |
| Opportunities | [docs/en/opportunities-page.md](./docs/en/opportunities-page.md) | [docs/zh/opportunities-page.md](./docs/zh/opportunities-page.md) |

---

## Deployment

**Option 1 — One-click deploy (recommended)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lwwywang/AW4SR-academic-website-4-senior-researcher)

Vercel will clone this repo into your GitHub account and deploy it automatically. Every `git push` to `main` triggers a new deployment — no manual steps needed.

**Option 2 — Deploy manually**

1. Fork this repository on GitHub
2. Follow the local setup steps above to run the project and edit your content
3. Connect your fork to [Vercel](https://vercel.com) for automatic deployment

---

## What's Included

- **8 pages** — About, News, Portfolio, Publications, Projects, Team, Courses, Opportunities
- **Dynamic project pages** — routes auto-generated from your content, no config needed
- **Dark mode** — system-aware, persisted in localStorage
- **Fully static export** — no server required at runtime

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Fonts | Playfair Display · Inter via `next/font/google` |
| Deployment | Any static host — Vercel, Netlify, GitHub Pages |

---

## Project Documentation (Internal)

HLD: https://clever-pelican-46a.notion.site/35f35604bb16805d9779e24a1c7150a3?source=copy_link

LLD: https://clever-pelican-46a.notion.site/36135604bb1680b49e3eec3e45ce9ec3?source=copy_link

Conducted interviews with a NUS professor to gather and summarize project requirements.
