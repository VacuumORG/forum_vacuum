import { FunctionComponent, RefObject, useState } from 'react'
import TextField from '../TextField'
import Button from '../Button'
import {
  EnvelopeSimple,
  LockSimple,
  Eye,
  EyeSlash,
  CaretLeft,
} from '@phosphor-icons/react'

interface SignUpProps {
  modalRef?: RefObject<HTMLDialogElement>
  nextStep?: () => void
}

const SignUp: FunctionComponent<SignUpProps> = ({modalRef, nextStep}) => {
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
  function handlerSignUp(e: any) {
    e.preventDefault()
    nextStep!()
  }

  return (
    <div className="w-full h-full flex flex-col gap-1 py-10 px-20">
      <div className="flex justify-between">
        <div className="flex ">
          <CaretLeft
            alt="Voltar"
            width={16}
            height={16}
            className="mr-1 fill-white cursor-pointer align-text-top"
          />
          <a className="theme-text text-xs" onClick={() => modalRef?.current?.close()}>voltar</a>
        </div>
        <p className="theme-text text-xs">Etapa 1 de 3</p>
      </div>

      <h1 className="theme-text font-bold text-2xl mt-4 mb-3">
        Registre sua Conta
      </h1>
      <p className="theme-text text-xs">
        Preencha os
        <span className="theme-text-purple font-bold"> campos abaixo </span>para
        completar seu Cadastro.
      </p>
      <form onSubmit={handlerSignUp} className="flex flex-col gap-4 mt-8">
        <div className="flex justify-between gap-4">
          <TextField
            id="name"
            type="text"
            label="nome de usuário"
            placeholder="Seu nome de usuário"
            required
          />
          <TextField
            id="phone"
            type="tel"
            label="telefone"
            placeholder="+55 71 99999-9999"
            required
          />
        </div>
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

        <p className="theme-text text-xs mb-3">
          Ao cadastrar, você concorda com nossos
          <span className="theme-text-purple font-bold">
            {' '}
            Termos & Condições{' '}
          </span>
          e as
          <span className="theme-text-purple font-bold">
            {' '}
            Políticas de Privacidade
          </span>
        </p>
        <Button
          className="theme-btn p-1 rounded"
          type="submit"
          title="cadastre-se"
        />
      </form>
    </div>
  )
}

export default SignUp
