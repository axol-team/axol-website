'use server'

const SLACK_WEBHOOK_URL = process.env.SLACK_CONTACT_WEBHOOK_URL

interface FormData {
    name: string
    email: string
    message: string
}

export async function sendMessage(data: FormData) {
    if (!SLACK_WEBHOOK_URL) {
        throw new Error('SLACK_WEBHOOK_URL is not set')
    }

    const message = {
        text:
            `🔔 *New Contact Form Submission*\n\n` +
            `*Contact Details*\n` +
            `• Name: ${data.name}\n` +
            `• Email: ${data.email}\n\n` +
            `*Message*\n${data.message}`
    }

    const response = await fetch(SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(message),
    })

    console.log(response)

    if (!response.ok) {
        throw new Error(
            `Slack webhook failed: ${response.status} ${response.statusText}`
        )
    }
}

