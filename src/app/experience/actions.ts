'use server'

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email') as string
  const role = formData.get('role') as string

  if (!email || !email.includes('@')) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  if (!role) {
    return { success: false, message: 'Please select your role.' }
  }

  // In production: persist to database / CRM / email service
  console.log('Waitlist submission:', { email, role, timestamp: new Date().toISOString() })

  return { success: true, message: "You're on the list! We'll be in touch soon." }
}
