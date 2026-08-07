# Nikita Kalal — Portfolio

An editorial-serif personal portfolio built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** — design tokens for the editorial serif palette (light + dark)
- **Framer Motion** — scroll reveals
- **next-themes** — light / dark mode toggle
- **next/font** — Playfair Display, Source Sans 3, IBM Plex Mono
- **@emailjs/browser** — contact form delivery, no backend required
- **lucide-react** — icons

## Folder structure

```
portfolio-nikita/
├── public/
│   └── resume.pdf              ← your resume, served at /resume.pdf
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← fonts, metadata, theme provider
│   │   ├── page.tsx              ← assembles all sections
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Resume.tsx
│   │   ├── Education.tsx
│   │   ├── Achievements.tsx
│   │   ├── GithubSection.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Reveal.tsx           ← shared scroll-reveal wrapper
│   │   ├── SectionHead.tsx      ← shared section heading
│   │   └── ui/Button.tsx        ← reusable button (solid/ghost, loading state)
│   ├── data/
│   │   └── content.ts           ← ALL portfolio content lives here — edit this file
│   ├── hooks/
│   │   └── useScrollSpy.ts
│   ├── lib/
│   │   ├── emailjs.ts
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── package.json
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── postcss.config.js
└── .eslintrc.json
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Everything text-based (name, bio, skills, experience, projects, education, achievements, contact info) lives in **`src/data/content.ts`**. Change it there and every section updates automatically.

## Resume

`public/resume.pdf` is served at `/resume.pdf`. Replace that file with an updated resume any time — the "View Resume" and "Download Resume" buttons and the embedded preview all point at that same path, so nothing else needs to change.

## Contact form (EmailJS)

The form validates client-side and is wired to send through [EmailJS](https://www.emailjs.com) — no backend server needed.

1. Create a free EmailJS account.
2. Add an **Email Service** (e.g. connect your Gmail).
3. Create an **Email Template** with these variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{sent_time}}`, `{{user_agent}}`.
4. Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Restart `npm run dev`. Until these are set, the form still validates and shows loading/error states, but tells the visitor delivery isn't connected yet (rather than silently pretending to succeed).

## GitHub Activity section

Fetches live data client-side from the public GitHub REST API for the username set in `src/data/content.ts` (`githubUser`). No token or config needed for public data; GitHub's anonymous rate limit is 60 requests/hour per IP.

## Dark mode

Toggled via the header icon (persisted with `next-themes`, `class` strategy). Dark palette tokens (`dark-bg #121212`, `dark-card #1E1E1E`, `dark-ink #F8F8F8`, `dark-secondary #D4D4D4`, `dark-muted #A8A8A8`) are defined in `tailwind.config.ts` and used throughout components via `dark:` variants — all combinations meet WCAG AA contrast.

## Deploying

This is a standard Next.js app — deploys directly to **Vercel**:

```bash
npm run build
```

Push to GitHub, import the repo in Vercel, and it deploys with zero config. Add the EmailJS environment variables in the Vercel project settings (Environment Variables) before your first production deploy.

## Notes

- Accessibility: skip link, semantic landmarks, `aria-live` status regions, keyboard-operable project cards & modal (Enter/Space/Escape), visible focus rings throughout.
- Responsive: tested breakpoints at 375 / 480 / 768 / 1024 / 1440px via Tailwind's responsive utilities.
- Animations are intentionally restrained (fade/slide reveals via Framer Motion, hover micro-interactions) to keep the editorial, non-SaaS feel from the design brief.
