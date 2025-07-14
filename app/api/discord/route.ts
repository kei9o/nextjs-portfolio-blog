import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { message } = await req.json()

  if (!process.env.DISCORD_WEBHOOK_URL) {
    return NextResponse.json({ error: 'Discord webhook URL not configured' }, { status: 500 })
  }

  if (!message) {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 })
  }

  try {
    const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: message }),
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to send Discord notification' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending Discord notification:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
