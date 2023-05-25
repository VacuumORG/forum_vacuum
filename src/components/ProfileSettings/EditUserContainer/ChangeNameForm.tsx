import Button from '@/components/Button'
import ProfileSettingsTextField from '@/components/TextField/ProfileSettingsTextField'

export default function ChangeNameForm() {
  return (
    <form>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <label className="text-g09 font-medium text-[0.8125rem]">
            Nome atual
          </label>
          <label className="text-g09 font-medium text-[0.8125rem]">
            John Silvio Santos Costa Doe
          </label>
        </div>
        <ProfileSettingsTextField label="Novo nome" />
      </div>
      <Button
        className="theme-btn py-1 text-[13px] px-[1.625rem] mt-5 rounded font-semibold opacity-75 hover:opacity-100 duration-300 transition-all"
        type="submit"
        title="Aplicar"
      />
    </form>
  )
}
