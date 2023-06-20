import ChangeNameForm from './ChangeNameForm'
import ChangePasswordForm from './ChangePasswordForm'

const EditUserContainer = () => {
  return (
    <section className="flex w-[750px] min-h-full bg-g06 rounded-[3px] justify-center mt-[2.6875rem] pt-[3.375rem]">
      <div className="flex flex-col">
        <h2 className="font-bold text-xl text-white">
          Edite suas informações pessoais
        </h2>

        <div className="w-[380px] py-10">
          <h3 className="font-medium text-base text-white mb-[2.5625rem]">
            Alterar nome atual
          </h3>
          <ChangeNameForm />
          <h3 className="font-medium text-[15px] text-white mb-[2.5625rem] mt-[2.875rem]">
            Alterar senha atual
          </h3>
          <ChangePasswordForm />
        </div>
      </div>
    </section>
  )
}

export default EditUserContainer
