import { FormEvent, FunctionComponent } from 'react'
import Button from '@/components/Button'
import ProfileSettingsTextField from '@/components/TextField/ProfileSettingsTextField'

const ChangePasswordForm: FunctionComponent = () => {
  const handleUploadName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleUploadName}>
      <div className="flex flex-col gap-6">
        <ProfileSettingsTextField
          label="Senha atual"
          name="oldPassword"
          type="password"
        />
        <ProfileSettingsTextField
          label="Nova senha"
          name="newPassword"
          type="password"
        />
        <ProfileSettingsTextField
          label="Confirmar senha"
          name="confirmNewPassword"
          type="password"
        />
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
