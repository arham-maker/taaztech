import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE_NAME, SUPPORT_EMAIL } from "@/lib/site";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: "Email service is not configured. Please contact us directly." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const emailSubject = subject
    ? `[${SITE_NAME} Contact] ${subject}`
    : `[${SITE_NAME} Contact] New message from ${name}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "N/A"}`,
    `Subject: ${subject || "N/A"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const contactTo = process.env.CONTACT_TO?.trim() || SUPPORT_EMAIL;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || smtpUser,
      to: contactTo,
      replyTo: email,
      subject: emailSubject,
      text,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
