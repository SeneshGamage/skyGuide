-- Day 3: seed reviews with the testimonials currently hardcoded in
-- src/pages/Testimonials.tsx, so the page isn't empty after cutover.

insert into public.reviews (author_name, location, reviewer_type, rating, message)
values
  ('Sarah Mitchell', 'New York, USA', 'customer', 5,
   'SkyGuide helped me find the perfect sunny destination for my winter getaway! The weather filters are incredibly accurate and the recommendations were spot on.'),

  ('James Liu', 'London, UK', 'customer', 5,
   'As an avid hiker, finding destinations with the right weather conditions is crucial. SkyGuide made this so easy! Found my dream hiking spot in the Swiss Alps.'),

  ('Maria Garcia', 'Barcelona, Spain', 'customer', 5,
   'Amazing tool for planning family vacations. The kids loved every destination we picked using SkyGuide. Will definitely use it again!'),

  ('TravelMax Agency', 'Toronto, Canada', 'client', 5,
   'We''ve integrated SkyGuide into our booking platform and our customers love it. The B2B API is robust and well-documented.'),

  ('Adventure Tours Co.', 'Sydney, Australia', 'client', 5,
   'SkyGuide has transformed how we plan adventure tours. Weather accuracy is crucial for our outdoor activities and SkyGuide delivers every time.'),

  ('Priya Sharma', 'Mumbai, India', 'customer', 4,
   'Great platform for discovering new travel destinations. The temperature filter helped me find comfortable spots during the summer heat.');
