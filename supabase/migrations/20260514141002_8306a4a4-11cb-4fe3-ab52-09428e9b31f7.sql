
DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;
-- No public policies: all access happens server-side via service role with validation.
