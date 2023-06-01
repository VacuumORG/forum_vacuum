import { FunctionComponent } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { updatePasswordFormSchema } from './schema'

import Button from '@/components/Button'

type UpdatePasswordFormData = z.infer<typeof updatePasswordFormSchema>

const ChangePasswordForm: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePasswordFormData>({
    resolver: zodResolver(updatePasswordFormSchema),
  })

  const handleUpdatePassword = async (data: any) => {
    try {
      console.log(data)
      // send to backend
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleUpdatePassword)}>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <label
            htmlFor="oldPassword"
            className="text-g09 font-medium text-[0.8125rem]"
          >
            Senha atual
          </label>
          <input
            id="oldPassword"
            type="password"
            className="bg-g08 text-[13px] rounded px-3 border-none placeholder-gray-300 hover:border-default transition-all duration-500 ease-in-out focus:outline-0 focus:ring-default focus:border-default"
            autoComplete="off"
            {...register('oldPw')}
          />
        </div>
        {errors.oldPw && (
          <span className="text-rose-600 font-normal text-[0.8rem]">
            {errors.oldPw.message}
          </span>
        )}
        <div className="flex justify-between items-center">
          <label
            htmlFor="newPassword"
            className="text-g09 font-medium text-[0.8125rem]"
          >
            Nova senha
          </label>
          <input
            id="newPassword"
            type="password"
            className="bg-g08 text-[13px] rounded px-3 border-none placeholder-gray-300 focus:outline-0 focus:ring-default focus:border-default  hover:border-default transition-all duration-500 ease-in-out"
            autoComplete="off"
            {...register('newPw')}
          />
        </div>
        {errors.newPw && (
          <span className="text-rose-600 font-normal text-[0.8rem]">
            {errors.newPw.message}
          </span>
        )}
        <div className="flex justify-between items-center">
          <label
            htmlFor="confirmNewPassword"
            className="text-g09 font-medium text-[0.8125rem]"
          >
            Confirmar nova senha
          </label>
          <input
            id="confirmNewPassword"
            type="password"
            className="bg-g08 text-[13px] rounded px-3 border-none placeholder-gray-300 focus:outline-0 focus:ring-default focus:border-default
          hover:border-default transition-all duration-500 ease-in-out"
            autoComplete="off"
            {...register('confirmNewPw')}
          />
        </div>
        {errors.confirmNewPw && (
          <span className="text-rose-600 font-normal text-[0.8rem]">
            {errors.confirmNewPw.message}
          </span>
        )}
      </div>
      <Button
        className="theme-btn py-1 text-[13px] px-[1.625rem] mt-5 rounded font-semibold opacity-75 hover:opacity-100 duration-300 transition-all"
        type="submit"
        title="Aplicar"
      />
    </form>
  )
}

export default ChangePasswordForm
