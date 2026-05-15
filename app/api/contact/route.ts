import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// The inbox where all contact form submissions will land
const NOTIFY_EMAIL = 'digitaltest366@gmail.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, purpose, message } = body

    if (!name || !email || !purpose || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Send notification email to Paul
    await resend.emails.send({
      from: 'BrilliantMinds Contact <onboarding@resend.dev>',
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New contact: ${purpose} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1e40af; margin-bottom: 4px;">New Contact Form Submission</h2>
          <p style="color: #6b7280; margin-top: 0; margin-bottom: 24px; font-size: 14px;">${new Date().toUTCString()}</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 120px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                <a href="mailto:${email}" style="color: #1e40af;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Purpose</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${purpose}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #374151; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>

          <p style="margin-top: 24px; font-size: 13px; color: #9ca3af;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    })

    console.log('Contact form submission delivered:', { name, email, purpose, timestamp: new Date().toISOString() })

    return NextResponse.json({
      success: true,
      message: 'Message received. We will get back to you within 24 hours.',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error. Please try again.' },
      { status: 500 }
    )
  }
}
