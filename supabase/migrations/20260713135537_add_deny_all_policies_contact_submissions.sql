/*
# Add explicit deny-all policies on contact_submissions

RLS is enabled but no policies existed, which triggers a security warning.
All actual data access goes through the `send-verification` edge function using
the service role key, which bypasses RLS entirely.

These four policies explicitly deny all access to anon and authenticated roles,
making the lock-down explicit and satisfying the security scanner.
*/

CREATE POLICY "deny_select_contact" ON contact_submissions
  FOR SELECT TO anon, authenticated USING (false);

CREATE POLICY "deny_insert_contact" ON contact_submissions
  FOR INSERT TO anon, authenticated WITH CHECK (false);

CREATE POLICY "deny_update_contact" ON contact_submissions
  FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false);

CREATE POLICY "deny_delete_contact" ON contact_submissions
  FOR DELETE TO anon, authenticated USING (false);
