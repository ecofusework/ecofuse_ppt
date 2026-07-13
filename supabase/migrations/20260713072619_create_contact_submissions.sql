/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - id (uuid, primary key)
  - name (text, not null)
  - email (text, not null)
  - subject (text, not null)
  - message (text, not null)
  - verification_code (text, nullable — 6-digit code while pending)
  - verified (boolean, default false)
  - submitted_at (timestamptz, default now())
  - verified_at (timestamptz, nullable)

2. Security
- Enable RLS on contact_submissions.
- Allow anon + authenticated INSERT and SELECT.
- No UPDATE or DELETE from the frontend — verification handled by edge function with service role key.

3. Notes
- The edge function uses the service role key to read/update rows, bypassing RLS.
- Verification codes are generated server-side.
- Once verified, the edge function forwards the message to the destination email.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  verification_code text,
  verified boolean NOT NULL DEFAULT false,
  submitted_at timestamptz DEFAULT now(),
  verified_at timestamptz
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_contact" ON contact_submissions;
CREATE POLICY "anon_select_contact" ON contact_submissions FOR SELECT
TO anon, authenticated USING (true);
