import Button from '@/components/Button'
import ProfileSettingsTextField from '@/components/TextField/ProfileSettingsTextField'

export default function ChangePasswordForm() {
  return (
    <form>
      <div className="flex flex-col gap-6">
        <ProfileSettingsTextField label="Senha atual" type="password" />
        <ProfileSettingsTextField label="Nova senha" type="password" />
        <ProfileSettingsTextField label="Confirmar senha" type="password" />
      </div>
      <Button
        className="theme-btn py-1 text-[13px] px-[1.625rem] mt-5 rounded font-semibold opacity-75 hover:opacity-100 duration-300 transition-all"
        type="submit"
        title="Aplicar"
      />
    </form>
  )
}
