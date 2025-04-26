export interface ContactData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  createdAt?: string // ISO string, for NZT
}

export interface Contact extends ContactData {
  id: number
}

export interface ContactDataSC {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  created_at?: string // ISO string, for NZT
}

export interface ContactSC extends ContactDataSC {
  id: number
}
