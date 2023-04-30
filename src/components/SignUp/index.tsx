import { FunctionComponent, useState } from 'react'
import TextField from '../TextField'
import Button from '../Button'
import IconButton from '../IconButton'
import eyeOpen from '#/eye.svg'
import eyeClose from '#/eye_off.svg'
import Image from 'next/image'
import backIcon from '#/backIcon.svg'

interface SignUpProps {}

const SignUp: FunctionComponent<SignUpProps> = () => {
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
  function handlerSignUp(e: any) {
    e.preventDefault()
  }

  return (
    <div className="w-full h-full flex flex-col gap-1 py-10 px-20">
      <div className="flex justify-between">
        <div className="flex ">
          <Image
            src={backIcon.src}
            alt="Voltar"
            width={24}
            height={24}
            className="mr-1"
          />
          <a className="theme-text text-xs">voltar</a>
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
        <div className="flex justify-between">
          <TextField
            id="name"
            type="text"
            label="nome de usuário"
            placeholder="Seu nome de usuário"
            required
          />
          <TextField
            id="phone"
            type="number"
            label="telefone"
            placeholder="+123 456 78901-2345"
            required
          />
        </div>
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
