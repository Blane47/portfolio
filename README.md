# Portfolio

Personal portfolio site — Next.js 16, React 19, Tailwind v4, TypeScript.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing the content

**Everything you need to change lives in [`src/content/profile.ts`](src/content/profile.ts).**
The components read from that file — you should rarely need to touch them.

Search the file for `TODO` to find every placeholder. Each export maps to one
part of the page:

| Export        | Drives                                              |
| ------------- | --------------------------------------------------- |
| `profile`     | Name, role, headline, bio, email, résumé link        |
| `socials`     | The social icon row (hero, contact, footer)          |
| `stats`       | The floating cards on the hero portrait              |
| `about`       | About section copy                                   |
| `skillGroups` | Skills, grouped by layer of the stack                |
| `projects`    | Project cards                                        |
| `timeline`    | Experience and education entries                     |
| `contact`     | Contact block copy                                   |
| `siteMeta`    | `<title>`, meta description, share previews          |

## Assets to replace

All of these are placeholders generated at build-out time:

- `public/avatar.jpg` — your headshot, portrait crop, ~760×950 or larger
- `public/resume.pdf` — your real CV
- `public/projects/*.png` — one screenshot per project, roughly 16:10

Point `Project.image` at whatever you name the files.

## Design system

Tokens are defined in [`src/app/globals.css`](src/app/globals.css) under `@theme`.
Change the accent in one place and the whole site follows:

- `--color-accent` — the single accent colour (deep teal)
- `--color-paper` / `--color-surface` — warm page and card backgrounds
- `--font-display` — Instrument Serif, used for headings only
- `--font-sans` — Inter, used for everything else

Dark mode is class-driven (`.dark` on `<html>`), set before first paint by an
inline script in `layout.tsx` so there is no flash.

## Deploying

Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new).
No environment variables or build configuration needed.
