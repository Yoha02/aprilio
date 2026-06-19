# Aprilio.ai

Grounded Retrieval for Clinical Intelligence.

## Overview

Aprilio is building an LLM-based architecture that makes clinical practice guidelines accessible through intelligent retrieval. Our system outperforms GPT-5.4, Claude 4.6 Opus, Gemini 3.1 Pro, DeepSeek-V3.2, and Perplexity on real clinical oncology questions.

## Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Animation**: Framer Motion
- **Content**: MDX blog with flat-file storage
- **Deployment**: Docker on Google Cloud Run

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Docker

```bash
docker compose up
```

Or build directly:

```bash
docker build -t aprilio-site .
docker run -p 3000:8080 aprilio-site
```

## Deployment

Push to `main` to trigger Cloud Build:

```bash
gcloud builds submit --config cloudbuild.yaml
```

## Project Structure

```
src/
  app/                    # Pages (Next.js App Router)
    page.tsx              # Landing page
    experience/           # Experience the Difference (demo + waitlist)
    about/                # Company and team
    paper/                # Research paper
    contact/              # Contact form
    blog/                 # Blog listing + article pages
    sitemap.ts            # Auto-generated sitemap
  components/
    Navigation.tsx        # Sticky nav with glass morphism
    Footer.tsx            # Site footer
    landing/              # Landing page sections
    ui/                   # Shared UI primitives
  lib/
    articles.ts           # MDX content utilities
    schema.ts             # JSON-LD structured data
    seo.ts                # Metadata generation
  styles/
    globals.css           # Tailwind v4 theme + design tokens
content/
  blog/                   # MDX blog articles
public/
  robots.txt              # AI crawler permissions
  llms.txt                # LLM-readable site summary
  llms-full.txt           # Extended content for AI agents
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

See `.env.example` for all available configuration.
