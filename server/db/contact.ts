import { ContactDataSC } from '../../models/contact.ts'
import connection from './connection.ts'

export async function addContact(data: ContactDataSC) {
  await connection('contact').insert(data)
}
