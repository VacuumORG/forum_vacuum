import { FunctionComponent, RefObject, useState } from 'react'
import TextField from '../TextField'
import Button from '../Button'
import { login } from '@/api/services/auth'
import { setCookie } from 'cookies-next'
import {
  EnvelopeSimple,
  LockSimple,
  Eye,
  EyeSlash,
} from '@phosphor-icons/react'

interface LoginProps {
  modalRef?: RefObject<HTMLDialogElement>
}

const Login: FunctionComponent<LoginProps> = ({ modalRef }) => {
  const [inputType, setInputType] = useState('password')
  const [eyeOpen, setEyeOpen] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function changeInputTypeWhenClickBtnAndSwitchIcon() {
    if (inputType == 'password') {
      setInputType('text')
      setEyeOpen(true)
    } else {
      setInputType('password')
      setEyeOpen(false)
    }
  }
  async function handlerLogin(e: any) {
    e.preventDefault()
    try {
      const token = await login({ email, password })
      setCookie('token', token)
    } catch (error) {
      throw new Error('Usuário ou senha inválidos')
    }
    modalRef?.current?.close()
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
          onChange={(event) => setEmail(event.target.value)}
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
          onChange={(event) => setPassword(event.target.value)}
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
