import React from 'react'
import '../styles/Contact.scss' // Create this SCSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject*</label>
          <input
            type="text"
            id="subject"
            placeholder="Enter the subject"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            placeholder="Write your message here"
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className="send-button">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
