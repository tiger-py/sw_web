import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const projectType = String(body.projectType || "").trim();
    const location = String(body.location || "").trim();
    const message = String(body.message || "").trim();

    // Simple honeypot field. Real users should never fill this.
    const website = String(body.website || "").trim();
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || "glen@nbsystemsgroup.com";
    const from =
      process.env.CONTACT_FROM_EMAIL || "Solar Waves <onboarding@resend.dev>";

    const subject = `Solar Waves enquiry from ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
        <h2>New Solar Waves enquiry</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
        <p><strong>Project type:</strong> ${escapeHtml(projectType || "—")}</p>
        <p><strong>Location:</strong> ${escapeHtml(location || "—")}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      </div>
    `;

    const text = [
      "New Solar Waves enquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      `Project type: ${projectType || "—"}`,
      `Location: ${location || "—"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (result.error) {
      return NextResponse.json(
        { ok: false, error: result.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { ok: false, error: "Could not send message." },
      { status: 500 }
    );
  }
}