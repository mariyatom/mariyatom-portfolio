export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export const isValidPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, '') // remove non-digit characters
  // Valid if length is between 10 and 15 (e.g., NZ local or international formats)
  return cleaned.length >= 10 && cleaned.length <= 15
}
