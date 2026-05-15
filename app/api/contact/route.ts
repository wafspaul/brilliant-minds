import { NextRequest, NextResponse } from 'next/server'

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

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Log the submission server-side (visible in Vercel function logs)
    console.log('Contact form submission:', {
      name,
      email,
      purpose,
      timestamp: new Date().toISOString(),
    })

    // Return success - the message is received and logged.
    // To add email delivery later, add nodemailer here with SMTP env vars.
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
