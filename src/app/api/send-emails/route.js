import { Resend } from "resend";
import { NextResponse } from "next/server";
import twilio from "twilio";

const resend = new Resend(process.env.RESEND_API_KEY);
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request) {
  try {
    const { name, email, phone, message, date, time } = await request.json();

    const clinicLogo = "https://yourdomain.com/images/icons/HealPointLogo.png"; // 🔁 Use full URL after deploy
    const primaryColor = "#8b5e3c";
    const accentColor = "#f1b52b";

    // 📨 1. Email to Clinic Admin
    await resend.emails.send({
      from: "Dr. Devesh Clinic <test@resend.dev>", // use your verified domain
      to: "pvcodingz96@gmail.com",
      subject:
        name === "Website Visitor"
          ? "📩 New Newsletter Subscription"
          : `🩺 New Patient Inquiry — ${name}`,
      html: `
      <div style="font-family:'Segoe UI',Roboto,sans-serif;background-color:#fdfaf7;padding:40px 0;text-align:center;">
        <table width="600" align="center" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);text-align:left;">
          <tr>
            <td style="padding:30px;background-color:${primaryColor};color:white;">
              <img src="${clinicLogo}" width="60" style="border-radius:50%;margin-right:10px;vertical-align:middle;" />
              <span style="font-size:22px;font-weight:bold;">Dr. Devesh Homeopathy Clinic</span>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;color:#333;">
              <h2 style="margin-bottom:12px;color:${primaryColor};font-size:20px;">
                ${
                  name === "Website Visitor"
                    ? "New Newsletter Subscription"
                    : "New Contact Form Submission"
                }
              </h2>
              <p style="font-size:15px;line-height:1.6;">
                <strong>👤 Name:</strong> ${name}<br/>
                <strong>📧 Email:</strong> ${email}<br/>
                <strong>📞 Phone:</strong> ${phone || "N/A"}<br/>
                <strong>📅 Date:</strong> ${date || "N/A"}<br/>
                <strong>⏰ Time:</strong> ${time || "N/A"}
              </p>

              <div style="margin:20px 0;padding:15px;background-color:#fff8e1;border-left:4px solid ${accentColor};border-radius:8px;">
                <strong>💬 Message:</strong>
                <p style="margin:8px 0 0 0;font-style:italic;color:#444;">${message}</p>
              </div>

              <p style="font-size:13px;color:#777;margin-top:30px;">
                📍 Received via <strong>Clinic Website</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#faf6f2;text-align:center;padding:15px;font-size:13px;color:#666;">
              © ${new Date().getFullYear()} Dr. Devesh Clinic | All rights reserved.
            </td>
          </tr>
        </table>
      </div>
      `,
    });

    // 💚 2. Email to User (confirmation)
    await resend.emails.send({
      from: "Dr. Devesh Clinic <test@resend.dev>",
      to: email,
      subject:
        name === "Website Visitor"
          ? "💚 Thank You for Subscribing to Our Wellness Updates"
          : "💚 Thank You for Contacting Dr. Devesh Clinic",
      html: `
      <div style="font-family:'Segoe UI',Roboto,sans-serif;background-color:#fdfaf7;padding:40px 0;text-align:center;">
        <table width="600" align="center" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);text-align:left;">
          <tr>
            <td style="padding:30px;background-color:${primaryColor};color:white;">
              <img src="${clinicLogo}" width="60" style="border-radius:50%;margin-right:10px;vertical-align:middle;" />
              <span style="font-size:22px;font-weight:bold;">Dr. Devesh Homeopathy Clinic</span>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;color:#333;">
              <h2 style="color:${primaryColor};">Namaste ${
        name === "Website Visitor" ? "" : name
      } 🙏</h2>
              <p style="font-size:16px;">Thank you for ${
                name === "Website Visitor"
                  ? "joining our newsletter!"
                  : "reaching out to Dr. Devesh Clinic."
              }</p>

              ${
                name === "Website Visitor"
                  ? `<p>We'll keep you updated with wellness tips and natural remedies 🌿</p>`
                  : `<div style="margin:20px 0;padding:15px;background-color:#f9f3e7;border-left:4px solid ${accentColor};border-radius:8px;">
                      <strong>Your Message:</strong>
                      <p style="margin-top:8px;font-style:italic;">${message}</p>
                    </div>
                    <p><strong>📅 Preferred Date:</strong> ${date || "N/A"}</p>
                    <p><strong>⏰ Preferred Time:</strong> ${time || "N/A"}</p>`
              }

              <p style="margin-top:25px;color:#555;">Wishing you health and harmony,<br/>
              <strong style="color:${primaryColor};">🌿 The Homeopathy Clinic Team</strong></p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#faf6f2;text-align:center;padding:15px;font-size:13px;color:#666;">
              📍 123 Healing Street, Wellness City<br/>
              © ${new Date().getFullYear()} Dr. Devesh Clinic | All rights reserved.
            </td>
          </tr>
        </table>
      </div>
      `,
    });

    // 💬 3. WhatsApp Notification
    await twilioClient.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: process.env.ADMIN_WHATSAPP_NUMBER,
      body: `
🩺 *${
        name === "Website Visitor"
          ? "New Newsletter Subscription!"
          : "New Inquiry Received!"
      }*

👤 *Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone || "N/A"}
📅 *Date:* ${date || "N/A"}
⏰ *Time:* ${time || "N/A"}
💬 *Message:* ${message}

📍 _From: Clinic Website_
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Emails and WhatsApp sent successfully ✅",
    });
  } catch (error) {
    console.error("Error in send-emails API:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
