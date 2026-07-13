/*
# Tighten RLS on contact_submissions

1. Security Changes
- Drop the `anon_insert_contact` INSERT policy — it used `WITH CHECK (true)`, allowing unrestricted inserts.
- Drop the `anon_select_contact` SELECT policy — it used `USING (true)`, exposing all submissions (names, emails, messages) to anyone.
- No replacement policies needed: all reads and writes go through the `send-verification` edge function, which uses the service role key and bypasses RLS.
- The table is now fully locked down for anon and authenticated roles.

2. Notes
- The edge function creates submissions (INSERT), reads them for verification (SELECT), and updates them on verify (UPDATE) — all with the service role key, which bypasses RLS.
- No frontend code queries contact_submissions directly via the anon key.
*/

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
DROP POLICY IF EXISTS "anon_select_contact" ON contact_submissions;
