import Button from '../../Button'

const EditUserContainer = () => {
  return (
    <section className="flex w-[750px] h-[710px] bg-g06 rounded-[3px] justify-center mt-[7.8125rem] pt-[3.375rem]">
      <div>
        <h2 className="font-bold text-xl text-white">
          Edite suas informações pessoais
        </h2>

        <div className="w-[380px]">
          <h3 className="font-medium text-base text-white mb-[2.5625rem] mt-[2.3125rem]">
            Alterar nome atual
          </h3>
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <label className="text-g09 font-medium text-[0.8125rem]">
                  Nome atual
                </label>
                <label className="text-g09 font-medium text-[0.8125rem]">
                  John Doe
                </label>
              </div>
              <div className="flex justify-between">
                <label className="text-g09 font-medium text-[0.8125rem]">
                  Novo nome
                </label>
                <input className="rounded bg-g08" type="text" />
              </div>
            </div>
            <Button
              className="theme-btn py-1 px-[1.625rem] mt-5 rounded font-semibold"
              type="submit"
              title="Aplicar"
            />
          </form>
          <h3 className="font-medium text-[15px] text-white mb-[2.5625rem] mt-[2.875rem]">
            Alterar senha atual
          </h3>
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <label className="text-g09 font-medium text-[0.8125rem]">
                  Senha atual
                </label>
                <input className="rounded bg-g08" type="password" />
              </div>
              <div className="flex justify-between">
                <label className="text-g09 font-medium text-[0.8125rem]">
                  Nova Senha
                </label>
                <input className="rounded bg-g08" type="password" />
              </div>
              <div className="flex justify-between">
                <label className="text-g09 font-medium text-[0.8125rem]">
                  Confirmar senha
                </label>
                <input className="rounded bg-g08" type="password" />
              </div>
            </div>
            <Button
              className="theme-btn py-1 px-[1.625rem] mt-5 rounded font-semibold"
              type="submit"
              title="Aplicar"
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default EditUserContainer
