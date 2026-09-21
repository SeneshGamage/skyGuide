-- Day 3: reviews.location was missing - the Testimonials form collects
-- "City, Country" but the Day 2 schema didn't have a column for it.
alter table public.reviews
  add column if not exists location text;
