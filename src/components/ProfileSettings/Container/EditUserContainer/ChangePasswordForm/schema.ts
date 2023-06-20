import { z } from 'zod'

export const updatePasswordFormSchema = z
  .object({
    oldPw: z.string().nonempty('Digite sua senha atual'),
    newPw: z
      .string()
      .nonempty('Digite sua nova senha')
      .min(6, 'A senha precisa de no minimo 6 caracteres.'),
    confirmNewPw: z.string().nonempty('Confirme a sua nova senha'),
  })
  .refine(({ newPw, confirmNewPw }) => newPw === confirmNewPw, {
    message: 'As senhas não coincidem',
    path: ['confirmNewPw'],
  })
