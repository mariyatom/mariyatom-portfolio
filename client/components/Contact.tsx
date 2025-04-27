import emailjs from '@emailjs/browser'
import '../styles/Contact.scss' // Create this SCSS file
import { useRef } from 'react'
import { useSaveContact } from '../hooks/useContact'
import { ContactData } from '../../models/contact'

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null)
  const saveContact = useSaveContact()
  const SERVICE_ID = import.meta.env.VITE_CONTACT_ME_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_CONTACT_ME_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_CONTACT_ME_EMAIL_PUBLIC_KEY

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    const formData = new FormData(form.current)
    const payload: ContactData = {
      name: (formData.get('user_name') as string) || '',
      email: (formData.get('user_email') as string) || '',
      phone: (formData.get('user_phone') as string) || '',
      subject: (formData.get('subject') as string) || '',
      message: (formData.get('message') as string) || '',
      createdAt: new Date().toISOString(), // Add current timestamp
    }
    saveContact.mutate(payload)

    emailjs
      .sendForm(
        SERVICE_ID || '', // Use environment variable
        TEMPLATE_ID || '', // Use environment variable
        form.current,
        PUBLIC_KEY || '' // Use environment variable
      )
      .then(
        (result) => {
          alert('Message sent successfully!')

          form.current?.reset()
        },
        (error) => {
          alert('Failed to send message. Please try again later.')
        }
      )
  }

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input type="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone*</label>
          <input type="text" name="user_phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject*</label>
          <input type="text" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea name="message" rows={5} required />
        </div>
        <button type="submit" className="send-button">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
