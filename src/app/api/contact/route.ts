import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, enquiryType, message } =
      await req.json();

    await transporter.sendMail({
      from: `"Gourmet Gateway Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECIPIENTS,
      replyTo: email,
      subject: `New Enquiry: ${enquiryType || "General"} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #B8965A; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 22px; letter-spacing: 0.05em;">
              GOURMET GATEWAY
            </h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 12px; letter-spacing: 0.2em;">
              NEW CONTACT ENQUIRY
            </p>
          </div>

          <div style="padding: 32px; background: #f9f6f0; border: 1px solid #e6ddd0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e6ddd0; width: 40%;">
                  <span style="font-size: 11px; letter-spacing: 0.2em; color: #B8965A; text-transform: uppercase;">
                    Name
                  </span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e6ddd0; color: #1a1a1a; font-size: 15px;">
                  ${firstName} ${lastName}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e6ddd0;">
                  <span style="font-size: 11px; letter-spacing: 0.2em; color: #B8965A; text-transform: uppercase;">
                    Email
                  </span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e6ddd0; color: #1a1a1a; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #B8965A;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e6ddd0;">
                  <span style="font-size: 11px; letter-spacing: 0.2em; color: #B8965A; text-transform: uppercase;">
                    Phone
                  </span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e6ddd0; color: #1a1a1a; font-size: 15px;">
                  ${phone || "—"}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e6ddd0;">
                  <span style="font-size: 11px; letter-spacing: 0.2em; color: #B8965A; text-transform: uppercase;">
                    Enquiry Type
                  </span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e6ddd0; color: #1a1a1a; font-size: 15px;">
                  ${enquiryType || "General"}
                </td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <p style="font-size: 11px; letter-spacing: 0.2em; color: #B8965A; text-transform: uppercase; margin-bottom: 12px;">
                MESSAGE
              </p>
              <p style="color: #1a1a1a; font-size: 15px; line-height: 1.7; margin: 0; padding: 16px; background: white; border-left: 3px solid #B8965A;">
                ${message || "—"}
              </p>
            </div>
          </div>

          <div style="padding: 16px 32px; background: #1c1a14; text-align: center;">
            <p style="color: rgba(255,255,255,0.4); font-size: 11px; margin: 0; letter-spacing: 0.15em;">
              © ${new Date().getFullYear()} GOURMET GATEWAY INDIA LIMITED
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}