import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM_EMAIL = Deno.env.get("RESEND_FROM_EMAIL") || "Ecofuse <onboarding@resend.dev>";
const TO_EMAIL = "Ecofuse.work@gmail.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { action, name, email, subject, message, code, submissionId } = await req.json();

    if (action === "send-code") {
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

      const { data, error } = await supabase
        .from("contact_submissions")
        .insert({
          name,
          email,
          subject,
          message,
          verification_code: verificationCode,
          verified: false,
        })
        .select("id")
        .single();

      if (error) {
        return new Response(
          JSON.stringify({ error: "Failed to create submission" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (!RESEND_API_KEY) {
        return new Response(
          JSON.stringify({ error: "Email service not configured" }),
          { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: email,
          subject: "Verify your email - Ecofuse",
          html: `
            <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 24px;">
              <h2 style="color: #059669;">Ecofuse Email Verification</h2>
              <p>Hi ${name},</p>
              <p>Please use the code below to verify your email and send your message:</p>
              <div style="text-align: center; margin: 32px 0;">
                <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #059669;">${verificationCode}</span>
              </div>
              <p>This code expires in 10 minutes.</p>
              <p>If you didn't request this, you can safely ignore this email.</p>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
              <p style="color: #9ca3af; font-size: 12px;">Ecofuse - Building a greener future together.</p>
            </div>
          `,
        }),
      });

      if (!emailResponse.ok) {
        const errBody = await emailResponse.text();
        return new Response(
          JSON.stringify({ error: "Failed to send verification email" }),
          { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ submissionId: data.id, message: "Verification code sent" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (action === "verify") {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("verification_code, submitted_at")
        .eq("id", submissionId)
        .single();

      if (error || !data) {
        return new Response(
          JSON.stringify({ error: "Submission not found" }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (data.verification_code !== code) {
        return new Response(
          JSON.stringify({ error: "Invalid verification code" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const ageMinutes = (Date.now() - new Date(data.submitted_at).getTime()) / 60000;
      if (ageMinutes > 10) {
        return new Response(
          JSON.stringify({ error: "Verification code expired. Please resubmit the form." }),
          { status: 410, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      await supabase
        .from("contact_submissions")
        .update({ verified: true, verified_at: new Date().toISOString(), verification_code: null })
        .eq("id", submissionId);

      if (!RESEND_API_KEY) {
        return new Response(
          JSON.stringify({ verified: true, message: "Verified (email forwarding not configured)" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const { data: submission } = await supabase
        .from("contact_submissions")
        .select("name, email, subject, message")
        .eq("id", submissionId)
        .single();

      const forwardResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: TO_EMAIL,
          reply_to: submission.email,
          subject: `[Contact Form] ${submission.subject}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
              <h2 style="color: #059669;">New Verified Contact Message</h2>
              <p><strong>From:</strong> ${submission.name}</p>
              <p><strong>Email:</strong> ${submission.email}</p>
              <p><strong>Subject:</strong> ${submission.subject}</p>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;">
              <p style="white-space: pre-wrap;">${submission.message}</p>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
              <p style="color: #9ca3af; font-size: 12px;">This email was verified via 6-digit code before sending.</p>
            </div>
          `,
        }),
      });

      if (!forwardResponse.ok) {
        return new Response(
          JSON.stringify({ error: "Verified, but failed to forward message. Please email us directly." }),
          { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ verified: true, message: "Email verified and message sent!" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ error: "Unknown action" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
