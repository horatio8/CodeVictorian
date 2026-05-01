-- Code Victorian CMS schema.
-- Run once, in Supabase SQL Editor (or via `psql`), against the project
-- you'll point the site at. Idempotent — safe to re-run.

create table if not exists public.cms_documents (
  slug         text primary key,
  content      jsonb not null default '{}'::jsonb,
  updated_at   timestamptz not null default now(),
  updated_by   text
);

create table if not exists public.cms_admins (
  email      text primary key,
  added_at   timestamptz not null default now()
);

-- The public website reads documents via the anon key.
-- Edits go through server actions that use the service-role key, which
-- bypasses RLS — so we only need to allow SELECT for anon.
alter table public.cms_documents enable row level security;
alter table public.cms_admins    enable row level security;

drop policy if exists "anon read documents" on public.cms_documents;
create policy "anon read documents"
  on public.cms_documents for select
  to anon, authenticated
  using (true);

-- cms_admins is never read or written from the anon key — only the server
-- (via service role) ever touches it. RLS stays on with no policies, which
-- denies all anon access by default.

-- Seed the eleven document slugs so the dashboard shows them all even
-- before anyone publishes. Empty `content` is fine; pages fall back to
-- their hard-coded copy.
insert into public.cms_documents (slug, content) values
  ('siteSettings',  '{}'::jsonb),
  ('homePage',      '{}'::jsonb),
  ('petitionPage',  '{}'::jsonb),
  ('issuesPage',    '{}'::jsonb),
  ('aboutPage',     '{}'::jsonb),
  ('donatePage',    '{}'::jsonb),
  ('memberPage',    '{}'::jsonb),
  ('joinPage',      '{}'::jsonb),
  ('volunteerPage', '{}'::jsonb),
  ('contactPage',   '{}'::jsonb),
  ('privacyPage',   '{}'::jsonb)
on conflict (slug) do nothing;

-- Replace this with your own admin email(s) before running.
-- Add more later with: insert into public.cms_admins (email) values ('them@example.com');
-- insert into public.cms_admins (email) values ('you@example.com')
--   on conflict (email) do nothing;
