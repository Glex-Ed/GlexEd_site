ALTER TABLE public.leads
ADD COLUMN consent boolean NOT NULL DEFAULT false,
ADD COLUMN consent_at timestamptz;