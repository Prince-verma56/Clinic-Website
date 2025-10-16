import { Resend } from "resend";
import { NextResponse } from "next/server";
import twilio from "twilio";

// Initialize clients
const resend = new Resend(process.env.RESEND_API_KEY);
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request) {
  try {
    const { name, email, phone, message, date, time } = await request.json();

    // ✅ 1. Email to Clinic Owner
    await resend.emails.send({
      from: "Dr. Devesh Clinic <onboarding@resend.dev>",
      to: "pvcodingz96@gmail.com",
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>📩 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Preferred Date:</strong> ${date || 'N/A'}</p>
        <p><strong>Preferred Time:</strong> ${time || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr/>
        <small>Received via your clinic website contact form.</small>
      `,
    });

    // ✅ 2. Email to User
    await resend.emails.send({
      from: "Dr. Devesh Clinic <onboarding@resend.dev>",
      to: email,
      subject: "Thank You for Contacting Dr. Devesh Clinic 🙏",
      html: `
        <h1>Namaste ${name}, 👋</h1>
        <p>Dhanyawaad aapke sampark ke liye. Humne aapka message receive kar liya hai:</p>
        <blockquote>${message}</blockquote>
        <p><strong>Preferred Date:</strong> ${date || 'N/A'}</p>
        <p><strong>Preferred Time:</strong> ${time || 'N/A'}</p>
        <p>Humari team jald hi aapko contact karegi.</p>
        <hr/>
        <p>Best Regards,<br/><strong>The Homeopathy Clinic Team</strong></p>
      `,
    });

    // ✅ 3. WhatsApp Message to Clinic Owner
    await twilioClient.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM, // Twilio sandbox number
      to: process.env.ADMIN_WHATSAPP_NUMBER,  // Your WhatsApp number
      body: `
📩 *New Inquiry Received!*
👤 *Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone || 'N/A'}
📅 *Preferred Date:* ${date || 'N/A'}
⏰ *Preferred Time:* ${time || 'N/A'}
💬 *Message:* ${message}

🚀 _From: Clinic Website Contact Form_
      `,
    });

    // ✅ Success response
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
