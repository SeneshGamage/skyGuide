-- Day 2: Seed data - migrates the 8 destinations currently hardcoded in
-- src/data/destinations.ts into the database. Run this after 0001_init_schema.sql.
-- Safe to re-run: ON CONFLICT skips rows that already exist by slug.

insert into public.destinations
  (slug, name, country, image_url, rating, temperature, humidity, wind, description, latitude, longitude)
values
  ('santorini', 'Santorini', 'Greece',
   'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
   4.9, 26, 55, 'Low',
   'Iconic white-washed buildings and stunning sunsets over the Aegean Sea.',
   36.3932, 25.4615),

  ('bali', 'Bali', 'Indonesia',
   'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
   4.8, 30, 75, 'Medium',
   'Tropical paradise with lush rice terraces, temples, and beautiful beaches.',
   -8.4095, 115.1889),

  ('swiss-alps', 'Swiss Alps', 'Switzerland',
   'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
   4.9, 12, 65, 'High',
   'Majestic mountain peaks, pristine lakes, and world-class skiing.',
   46.8182, 8.2275),

  ('maldives', 'Maldives', 'Maldives',
   'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
   4.9, 29, 80, 'Low',
   'Crystal-clear waters, overwater bungalows, and pristine coral reefs.',
   3.2028, 73.2207),

  ('iceland', 'Reykjavik', 'Iceland',
   'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&q=80',
   4.7, 8, 70, 'High',
   'Northern lights, geysers, and dramatic volcanic landscapes.',
   64.1466, -21.9426),

  ('dubai', 'Dubai', 'UAE',
   'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
   4.6, 35, 45, 'Low',
   'Futuristic skyline, luxury shopping, and desert adventures.',
   25.2048, 55.2708),

  ('kyoto', 'Kyoto', 'Japan',
   'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
   4.8, 22, 60, 'Low',
   'Ancient temples, traditional gardens, and cherry blossom beauty.',
   35.0116, 135.7681),

  ('cape-town', 'Cape Town', 'South Africa',
   'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80',
   4.7, 24, 55, 'Medium',
   'Table Mountain, stunning coastlines, and vibrant culture.',
   -33.9249, 18.4241)

on conflict (slug) do nothing;
