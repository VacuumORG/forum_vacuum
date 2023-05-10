import { FunctionComponent, useState } from 'react'
import TextField from '../TextField'
import Button from '../Button'
import {
  EnvelopeSimple,
  LockSimple,
  Eye,
  EyeSlash,
} from '@phosphor-icons/react'

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const [inputType, setInputType] = useState('password')
  const [eyeOpen, setEyeOpen] = useState(true)

  function changeInputTypeWhenClickBtnAndSwitchIcon() {
    if (inputType == 'password') {
      setInputType('text')
      setEyeOpen(true)
    } else {
      setInputType('password')
      setEyeOpen(false)
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
          icon={
            <EnvelopeSimple
              width={24}
              height={24}
              weight="bold"
              alt="Envelope Simple"
            />
          }
          label="e-mail"
          placeholder="Seu email"
          required
        />
        <TextField
          id="password"
          type={inputType}
          icon={
            <LockSimple
              width={24}
              height={24}
              weight="bold"
              alt="Lock Simple"
            />
          }
          label="senha"
          placeholder="Sua senha"
          required
        >
          {eyeOpen ? (
            <Eye
              width={24}
              height={24}
              weight="bold"
              alt="Eye"
              onClick={changeInputTypeWhenClickBtnAndSwitchIcon}
            />
          ) : (
            <EyeSlash
              width={24}
              height={24}
              weight="bold"
              alt="Eye Slash"
              onClick={changeInputTypeWhenClickBtnAndSwitchIcon}
            />
          )}
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
