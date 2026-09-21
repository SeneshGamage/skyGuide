-- Day 2: Initial schema for SkyGuide
-- Run this in Supabase Dashboard -> SQL Editor -> New query -> Run
-- (or via `supabase db push` if you set up the CLI later)

-- ============================================================
-- destinations
-- Mirrors src/data/destinations.ts today; Day 5 will point the
-- Tracker at this table instead of the hardcoded file.
-- ============================================================
create table if not exists public.destinations (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,              -- e.g. "santorini", used in URLs
  name text not null,
  country text not null,
  image_url text not null,
  rating numeric(2, 1) not null check (rating >= 0 and rating <= 5),
  temperature numeric not null,           -- Celsius; Day 6 will make this live via Open-Meteo
  humidity numeric not null check (humidity >= 0 and humidity <= 100),
  wind text not null check (wind in ('Low', 'Medium', 'High')),
  description text not null,
  latitude numeric not null,
  longitude numeric not null,
  created_at timestamptz not null default now()
);

alter table public.destinations enable row level security;

-- Anyone (including anonymous visitors) can read destinations.
-- Nobody can insert/update/delete through the app - only via
-- the Supabase dashboard/service role, since this is your content.
create policy "Public can view destinations"
  on public.destinations for select
  using (true);

-- ============================================================
-- reviews
-- Backs the Testimonials page: "Add Review" + Clients/Customers toggle.
-- ============================================================
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  reviewer_type text not null check (reviewer_type in ('client', 'customer')),
  rating integer not null check (rating >= 1 and rating <= 5),
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.reviews enable row level security;

-- Anyone can read reviews (they're public testimonials).
create policy "Public can view reviews"
  on public.reviews for select
  using (true);

-- Anyone can submit a review - no login required, matching the
-- current "Add Review" button which has no auth gate.
create policy "Public can submit reviews"
  on public.reviews for insert
  with check (true);

-- ============================================================
-- partnership_leads
-- Backs the "Become a Client" B2B inquiry form (PartnershipDialog.tsx).
-- ============================================================
create table if not exists public.partnership_leads (
  id uuid primary key default gen_random_uuid(),
  contact_name text not null,
  company_name text not null,
  industry text not null,
  company_size text not null,
  email text not null,
  message text,
  created_at timestamptz not null default now()
);

alter table public.partnership_leads enable row level security;

-- Anyone can submit a lead...
create policy "Public can submit partnership leads"
  on public.partnership_leads for insert
  with check (true);

-- ...but nobody can read them back through the app. This is lead
-- data with emails in it - only visible via the Supabase dashboard
-- (service role), not the public anon key. Note the absence of a
-- SELECT policy here - that's what keeps it private.

-- ============================================================
-- contact_messages
-- Backs the general contact form on the About page.
-- ============================================================
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

create policy "Public can submit contact messages"
  on public.contact_messages for insert
  with check (true);

-- No SELECT policy here either - same reasoning as partnership_leads.
