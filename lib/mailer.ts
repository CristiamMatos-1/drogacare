import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT || 465);
const secure = (process.env.SMTP_SECURE ?? "true") === "true";
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const from = process.env.EMAIL_FROM || `Drogacare <${user}>`;

if (!host || !user || !pass) {
  console.warn("SMTP not fully configured. Emails will fail until SMTP_HOST/SMTP_USER/SMTP_PASS are set.");
}

export const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: {
    user,
    pass,
  },
});

export async function sendEmail(to: string, subject: string, html: string, text?: string) {
  if (!host || !user || !pass) {
    throw new Error("SMTP not configured");
  }

  const info = await transporter.sendMail({
    from,
    to,
    subject,
    html,
    text,
  });

  return info;
}
