import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  organization: z.string().trim().max(200).optional().or(z.literal("")),
  role: z.string().trim().max(120).optional().or(z.literal("")),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
  source: z.string().trim().max(80).optional(),
  consent: z.literal(true, {
    message: "Debés aceptar la política de tratamiento de datos.",
  }),
  // Anti-spam honeypot: must be empty
  website: z.string().max(0).optional().or(z.literal("")),
  // Anti-spam: ms elapsed between form render and submit
  elapsedMs: z.number().int().nonnegative().optional(),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    // Honeypot: bots fill hidden fields. Pretend success without storing.
    if (data.website && data.website.length > 0) {
      console.warn("[submitLead] honeypot triggered", { source: data.source });
      return { ok: true as const };
    }
    // Time-trap: real users take >1.5s to fill the form.
    if (typeof data.elapsedMs === "number" && data.elapsedMs < 1500) {
      console.warn("[submitLead] time-trap triggered", { elapsedMs: data.elapsedMs });
      return { ok: true as const };
    }

    const payload = {
      name: data.name,
      email: data.email,
      organization: data.organization || null,
      role: data.role || null,
      country: data.country || null,
      message: data.message,
      source: data.source || "website",
      consent: true,
      consent_at: new Date().toISOString(),
    };

    const { error } = await supabaseAdmin.from("leads").insert(payload);

    if (error) {
      console.error("[submitLead] insert failed", error);
      return { ok: false as const, error: "No pudimos registrar la consulta. Probá de nuevo." };
    }

    return { ok: true as const };
  });
