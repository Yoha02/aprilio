'use server'

export interface ContactFormState {
  success: boolean
  message: string
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const role = formData.get('role') as string
  const message = formData.get('message') as string

  if (!name || !email || !role || !message) {
    return { success: false, message: 'All fields are required.' }
  }

  // TODO: Replace with Slack webhook integration
  // Example: await fetch(process.env.SLACK_WEBHOOK_URL, { method: 'POST', body: JSON.stringify({ name, email, role, message }) })
  console.log('Contact form submission:', { name, email, role, message })

  return {
    success: true,
    message: 'Thank you for reaching out. We\'ll get back to you within 24 hours.',
  }
}
