-- Day 4: contact_messages.subject was missing - the Contact form has an
-- optional "Subject" field the Day 2 schema didn't account for.
alter table public.contact_messages
  add column if not exists subject text;
