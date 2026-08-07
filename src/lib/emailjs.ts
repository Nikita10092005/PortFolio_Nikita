"use client";
import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

export const isEmailConfigured = () => Boolean(
  EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey
);

export interface ContactPayload extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  message: string;
  sent_time: string;
  user_agent: string;
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  if (!isEmailConfigured()) {
    throw new Error("EmailJS is not configured. Set NEXT_PUBLIC_EMAILJS_* env vars.");
  }
  await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, payload, {
    publicKey: EMAILJS_CONFIG.publicKey,
  });
}
