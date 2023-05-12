import { FunctionComponent } from 'react'
import TextField from '../TextField'
import Button from '../Button'
import { EnvelopeSimple } from '@phosphor-icons/react'

interface ForgotPasswordProps {}

const ForgotPassword: FunctionComponent<ForgotPasswordProps> = () => {
  const handlerSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className="w-full h-full flex flex-col gap-1 py-10 px-20">
      <span className="theme-text self-end text-xs mb-11">
        Não tem uma conta?{' '}
        <a className="theme-text-purple font-bold">Cadastre-se</a>
      </span>
      <h1 className="theme-text font-bold text-2xl mb-3">Esqueceu a senha?</h1>
      <p className="theme-text text-xs">
        Insira seu e-mail que enviaremos um{' '}
        <span className="theme-text-purple font-bold">
          link para redefini-la.
        </span>
      </p>
      <form onSubmit={handlerSubmit} className="flex flex-col gap-4 mt-8">
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
        <Button
          className="theme-btn p-1 rounded mt-5"
          type="submit"
          title="enviar"
        />
      </form>
    </div>
  )
}

export default ForgotPassword
