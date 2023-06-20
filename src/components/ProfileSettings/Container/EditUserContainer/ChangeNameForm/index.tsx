import { FunctionComponent } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateNameFormSchema } from './schema'

import Button from '@/components/Button'

type UpdateNameFormData = z.infer<typeof updateNameFormSchema>

const ChangeNameForm: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateNameFormData>({
    resolver: zodResolver(updateNameFormSchema),
  })

  const handleUpdateName = async (data: any) => {
    try {
      console.log(data)
      // send to backend
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleUpdateName)}>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <label className="text-g09 font-medium text-[0.8125rem]">
            Nome atual
          </label>
          <label className="text-g09 font-medium text-[0.8125rem]">
            John Silvio Santos Costa Doe
          </label>
        </div>
        <div className="flex justify-between items-center">
          <label
            htmlFor="name"
            className="text-g09 font-medium text-[0.8125rem]"
          >
            Novo nome
          </label>
          <input
            id="name"
            type="text"
            className="bg-g08 text-[13px] rounded px-3 border-none placeholder-gray-300 focus:outline-0 focus:ring-default focus:border-default
          hover:border-default transition-all duration-500 ease-in-out invalid:text-red-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            autoComplete="off"
            {...register('newName')}
          />
        </div>
        {errors.newName && (
          <span className="text-rose-600 font-normal text-[0.8rem]">
            {errors.newName.message}
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

export default ChangeNameForm
