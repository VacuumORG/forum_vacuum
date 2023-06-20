import { z } from 'zod'

export const updateNameFormSchema = z.object({
  newName: z.string().nonempty('Digite seu novo nome de usuário'),
})
