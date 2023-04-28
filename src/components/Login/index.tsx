import { FunctionComponent, useState } from 'react'
import TextField from '../TextField'
import Button from '../Button'
import IconButton from '../IconButton'
import eyeOpen from '#/eye.svg'
import eyeClose from '#/eye_off.svg'
import Image from 'next/image'

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const [inputType, setInputType] = useState('password')
  const [icon, setIcon] = useState(eyeOpen)

  function changeInputTypeWhenClickBtnAndSwitchIcon() {
    if (inputType == 'password') {
      setInputType('text')
      setIcon(eyeOpen)
    } else {
      setInputType('password')
      setIcon(eyeClose)
    }
  }
  function handlerLogin(e: any) {
    e.preventDefault()
  }

  return (
    <div className="w-full h-full flex flex-col gap-1 py-10 px-20">
      <span className="theme-text self-end text-xs mb-11">
        Não tem uma conta?{' '}
        <a className="theme-text-purple font-bold">Cadastre-se</a>
      </span>
      <h1 className="theme-text font-bold text-2xl mb-3">Seja bem vindo!</h1>
      <p className="theme-text text-xs">
        Faça <span className="theme-text-purple font-bold">login</span> para
        continuar
      </p>
      <form onSubmit={handlerLogin} className="flex flex-col gap-4 mt-8">
        <TextField
          id="email"
          type="email"
          icon={<Image width={24} height={24} src="/mail.svg" alt="" />}
          label="e-mail"
          placeholder="Seu email"
          required
        />
        <TextField
          id="password"
          type={inputType}
          icon={<Image width={24} height={24} src="/lock.svg" alt="" />}
          label="senha"
          placeholder="Sua senha"
          required
        >
          <IconButton
            icon={icon}
            w={24}
            h={24}
            onClick={changeInputTypeWhenClickBtnAndSwitchIcon}
          />
        </TextField>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <input
              className="border-0 shadow-md"
              type="checkbox"
              name="check"
              id="check"
            />
            <label
              htmlFor="check"
              className="theme-text-grey font-medium text-xs"
            >
              lembrar de mim
            </label>
          </div>
          <a className="theme-text-purple text-xs">Esqueceu a senha?</a>
        </div>
        <Button className="theme-btn p-1 rounded" type="submit" title="login" />
      </form>
    </div>
  )
}

export default Login
