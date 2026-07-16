/*
# ImoFlex marketing site — contact, partners, newsletter

1. Purpose
This is a marketing/communication website (no user accounts). Three public-facing forms
need to persist submissions: the general contact form, the partnership application form,
and the newsletter subscription form. All are submitted by anonymous visitors.

2. New Tables
- `contact_messages`: messages sent via the Contact form.
  - `id` (uuid, pk)
  - `name` (text, not null)
  - `email` (text, not null)
  - `phone` (text, nullable)
  - `subject` (text, not null)
  - `message` (text, not null)
  - `source` (text, default 'contact') — allows tagging the page origin
  - `created_at` (timestamptz, default now())
- `partner_applications`: applications from the Partners section.
  - `id` (uuid, pk)
  - `organization` (text, not null)
  - `contact_name` (text, not null)
  - `email` (text, not null)
  - `phone` (text, nullable)
  - `partner_type` (text, not null) — agency, developer, manager, financial, tech
  - `country` (text, nullable)
  - `message` (text, nullable)
  - `created_at` (timestamptz, default now())
- `newsletter_subscribers`: email subscriptions.
  - `id` (uuid, pk)
  - `email` (text, unique, not null)
  - `source` (text, default 'site')
  - `created_at` (timestamptz, default now())

3. Security
- RLS enabled on all three tables.
- Policies allow anon + authenticated INSERT (public forms) and SELECT is restricted
  (only service role / authenticated admins should read submissions). For a marketing
  site we keep SELECT open to authenticated only so submissions are not publicly readable.
- Newsletter has an INSERT-only policy and a unique email constraint to prevent duplicates.

4. Notes
- No user_id / auth.users linkage — this is a single-tenant public marketing site.
- Insert policies use `WITH CHECK (true)` because any visitor may submit.
- SELECT is NOT granted to anon to keep submissions private.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  source text NOT NULL DEFAULT 'contact',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_messages;
CREATE POLICY "anon_insert_contact" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_read_contact" ON contact_messages;
CREATE POLICY "auth_read_contact" ON contact_messages FOR SELECT
  TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS partner_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  partner_type text NOT NULL,
  country text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE partner_applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_partner" ON partner_applications;
CREATE POLICY "anon_insert_partner" ON partner_applications FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_read_partner" ON partner_applications;
CREATE POLICY "auth_read_partner" ON partner_applications FOR SELECT
  TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  source text NOT NULL DEFAULT 'site',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_subscribers;
CREATE POLICY "anon_insert_newsletter" ON newsletter_subscribers FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_read_newsletter" ON newsletter_subscribers;
CREATE POLICY "auth_read_newsletter" ON newsletter_subscribers FOR SELECT
  TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_messages (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_partner_created_at ON partner_applications (created_at DESC);
