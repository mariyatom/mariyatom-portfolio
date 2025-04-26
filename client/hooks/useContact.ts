import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ContactData } from '../../models/contact'
import { saveContact } from '../apis/contact'

export function useSaveContact() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (form: ContactData) => saveContact(form),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact'] })
    },
  })
  return mutation
}
