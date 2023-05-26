import ChangeNameForm from './ChangeNameForm'
import ChangePasswordForm from './ChangePasswordForm'

const EditUserContainer = () => {
  return (
    <section className="flex w-[750px] h-[710px] bg-g06 rounded-[3px] justify-center mt-[2.6875rem] pt-[3.375rem]">
      <div>
        <h2 className="font-bold text-xl text-white">
          Edite suas informações pessoais
        </h2>

        <div className="w-[380px]">
          <h3 className="font-medium text-base text-white mb-[2.5625rem] mt-[2.3125rem]">
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
