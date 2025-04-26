import request from 'superagent'
import { ContactData } from '../../models/contact'

// POST /api/v1/contact
export async function saveContact(form: ContactData | undefined) {
  try {
    const res = await request
      .post('/api/v1/contacts')
      .set('Content-Type', 'application/json')
      .send(form)
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
