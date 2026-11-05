# Adekunle Francis Ayomide | Flutter Developer Portfolio

A modern, animated portfolio built with **React + TypeScript + Tailwind CSS v4 + Framer Motion**, bundled with **Vite**.

## Requirements

- Node.js 18 or newer (check with `node -v`)

## Run locally

```
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173).

## Other commands

```
npm run build      # production build into /dist
npm run preview    # preview the production build
npm run typecheck  # TypeScript check
```

## Edit your content

All text (projects, skills, experience, links) lives in one file:

`src/lib/data.ts`

Change it there and the whole site updates.

## Project structure

```
src/
├── App.tsx                 # Page layout
├── main.tsx                # Entry point
├── index.css               # Tailwind + blue theme + animations
├── lib/
│   ├── data.ts             # All your content
│   └── useTypewriter.ts    # Typing effect hook
└── components/
    ├── Navbar.tsx          # Glass nav with scroll-spy
    ├── Hero.tsx            # Intro, typewriter, counters
    ├── PhoneMockup.tsx     # 3D floating phone
    ├── Marquee.tsx         # Scrolling tech strip
    ├── About.tsx
    ├── Skills.tsx
    ├── Experience.tsx      # Timeline that fills on scroll
    ├── Projects.tsx        # 3D tilt cards
    ├── Education.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    ├── Effects.tsx         # Loader, scroll bar, cursor glow, background
    ├── Interactive.tsx     # Magnetic button, tilt card, counter
    ├── Reveal.tsx          # Scroll reveal + section titles
    └── Icons.tsx
```

## Deploy on Render (free static site)

1. Push this folder to a GitHub repository:
   ```
   git init
   git add .
   git commit -m "React portfolio"
   git branch -M main
   git remote add origin https://github.com/akpabio100/adekunle-portfolio-react.git
   git push -u origin main
   ```
2. On https://dashboard.render.com click **New +** then **Static Site** and pick the repo.
3. Use these settings:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. Click **Create Static Site**.

Every `git push` to `main` redeploys automatically.

If the build fails because of the Node version, add an environment variable on Render: `NODE_VERSION` = `20`.

## Next improvements

- Add your photo (put it in `src/assets/` and use it in the About or Hero section).
- Add screenshots of your apps where your employer allows.
- Add a "Download CV" button (put the PDF in a `public/` folder and link to `/your-cv.pdf`).
