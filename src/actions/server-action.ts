"use server";

import { Resend } from "resend";

import { actionClient } from "./safe-action";

import { formSchema } from "@/lib/form-schema";

const DEFAULT_TO_EMAILS = [
  "contact@infynex.org",
  "vaibhavnevase7700@gmail.com",
];

export const serverAction = actionClient
  .inputSchema(formSchema)
  .action(async ({ parsedInput }) => {
    const { name, email, company, message } = parsedInput;

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || apiKey.trim() === "") {
      // eslint-disable-next-line no-console
      console.warn("RESEND_API_KEY is not configured in .env.local");
      throw new Error(
        "Service is temporarily unavailable. Please try again later or contact us directly.",
      );
    }

    try {
      const resend = new Resend(apiKey.trim());
      const fromEmail =
        process.env.RESEND_FROM_EMAIL?.trim() ||
        "InfyNex Website <onboarding@resend.dev>";

      const configuredTo = process.env.RESEND_TO_EMAIL
        ? process.env.RESEND_TO_EMAIL.split(",").map((e) => e.trim())
        : DEFAULT_TO_EMAILS;

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #00abbd; margin-bottom: 16px;">New Contact Form Inquiry</h2>
          <p style="margin-bottom: 24px; color: #555;">You received a new inquiry from the InfyNex website contact form:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 140px; color: #333;">Full Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #333;">Email Address:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #00abbd; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #333;">Company:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${company ? company : "Not specified"}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; margin-bottom: 24px; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #333;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #1e293b;">${message}</p>
          </div>

          <p style="font-size: 12px; color: #94a3b8; margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 12px;">
            This email was sent automatically from the InfyNex contact form.
          </p>
        </div>
      `;

      // Attempt to send to configured recipients
      let sendResult = await resend.emails.send({
        from: fromEmail,
        to: configuredTo,
        replyTo: email,
        subject: `New Inquiry from ${name} - InfyNex`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not specified"}\n\nMessage:\n${message}`,
        html: emailHtml,
      });

      // Handle Resend unverified domain testing restriction
      if (sendResult.error) {
        const errorMsg = sendResult.error.message || "";
        const testMatch = errorMsg.match(
          /testing emails to your own email address \(([^)]+)\)/,
        );

        if (testMatch && testMatch[1]) {
          // eslint-disable-next-line no-console
          console.warn(
            `[Resend Test Mode] Forwarding inquiry to verified testing address: ${testMatch[1]}. To send to ${DEFAULT_TO_EMAILS.join(", ")}, verify domain infynex.org at resend.com/domains.`,
          );

          // Retry sending to the verified testing address
          sendResult = await resend.emails.send({
            from: fromEmail,
            to: [testMatch[1]],
            replyTo: email,
            subject: `[TEST] New Inquiry from ${name} - InfyNex`,
            text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not specified"}\n\nMessage:\n${message}`,
            html: emailHtml,
          });
        }
      }

      if (sendResult.error) {
        // eslint-disable-next-line no-console
        console.error("Resend API Error (Server-side):", sendResult.error);
        throw new Error(
          "Unable to send message at this time. Please try again later or contact us directly at contact@infynex.org.",
        );
      }

      // eslint-disable-next-line no-console
      console.log("Resend email sent successfully, ID:", sendResult.data?.id);

      return {
        success: true,
        message: "Your message has been sent successfully!",
      };
    } catch (err: unknown) {
      // eslint-disable-next-line no-console
      console.error("Error in contact serverAction (Server-side):", err);
      throw new Error(
        "Unable to send message at this time. Please try again later or reach out to contact@infynex.org.",
      );
    }
  });
