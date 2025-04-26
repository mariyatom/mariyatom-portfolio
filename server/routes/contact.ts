import express from 'express'
import * as db from '../db/contact'

import { logError } from '../logger'
import { ContactData, ContactDataSC } from '../../models/contact'

const router = express.Router()
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body

    // Check if any required fields are missing
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Construct new contact data
    const newContact: ContactDataSC = {
      name,
      email,
      phone,
      subject,
      message,
      created_at: new Date().toISOString(), // Optionally set created_at if needed
    }

    // Insert the new contact data into the database
    await db.addContact(newContact)

    res.status(201).json({ message: 'Contact message submitted successfully' })
  } catch (e) {
    logError(e)
    res.status(500).json({ message: 'Unable to submit contact message' })
  }
})

export default router
