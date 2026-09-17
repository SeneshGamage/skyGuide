# SkyGuide — Weather-Based Tourist Discovery Platform

SkyGuide helps travelers find destinations that match the weather conditions they
actually want — filter by temperature range, humidity, wind, and precipitation to
discover places worth visiting right now.

## Features

- **Weather Tracker** — filter destinations by temperature, humidity, wind, and
  mist/rain conditions
- **Location details** — maps, ratings, and quick links to book or navigate
- **Testimonials** — read and submit traveler reviews
- **User manual** — interactive walkthrough of the site's features
- **Fully responsive** — works across desktop and mobile

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/) (Postgres, auth, edge functions) — backend

## Getting started

Requires [Node.js](https://nodejs.org/) and npm.

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd sky-guide-weather-app

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# then fill in VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
# from your Supabase project settings

# Start the dev server
npm run dev
```

## Backend

Backend build progress and schema notes live in [`docs/BACKEND_PLAN.md`](./docs/BACKEND_PLAN.md).

## Deployment

Build for production with:

```sh
npm run build
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, etc.).