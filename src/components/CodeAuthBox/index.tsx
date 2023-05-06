import { FunctionComponent, useRef, useState } from 'react'
import { CaretLeft } from '@phosphor-icons/react'
import Button from '../Button'

interface CodeAuthBoxProps {
  emailUser?: string
  required?: boolean
}

const CodeAuthBox: FunctionComponent<CodeAuthBoxProps> = ({
  emailUser,
  required,
}: CodeAuthBoxProps) => {
  const [numbers, setNumbers] = useState<Array<string>>([
    '',
    '',
    '',
    '',
    '',
    '',
  ])
  const inputs = useRef<Array<HTMLInputElement | null>>([])

  const handleNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputNumber = event.target.value
    if (inputNumber.length === 1 && /^\d+$/.test(inputNumber)) {
      const newNumbers = [...numbers]
      newNumbers[index] = inputNumber
      setNumbers(newNumbers)

      if (index < inputs.current.length - 1) {
        inputs.current[index + 1]?.focus()
      }
    } else {
      const newNumbers = [...numbers]
      newNumbers[index] = ''
      setNumbers(newNumbers)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(numbers)
    // Faça aqui a lógica para enviar os números para o backend
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center p-8 justify-between"
    >
      <div className="flex justify-between w-full mb-10 theme-color-simple-words-icon-code-auth-box">
        <div className="flex">
          <CaretLeft
            alt="Voltar"
            width={16}
            height={16}
            className="mr-1 fill-white cursor-pointer align-text-top"
          />
          <a className="theme-text text-xs cursor-pointer">voltar</a>
        </div>

        <p className="theme-text text-xs">Etapa 1 de 3</p>
      </div>

      <div className="flex flex-col w-full theme-color-title-code-auth-box">
        <h1 className="text-lg mb-5 font-semibold">
          Confira sua caixa de entrada
        </h1>

        <p className="mb-10 text-xs theme-color-simple-words-icon-code-auth-box">
          Nós enviamos um código de 6 digitos para{' '}
          <strong className="theme-color-email-code-auth-box">
            {emailUser}
          </strong>
          , confirme sua conta para realizar o cadastro.
        </p>

        <div className="flex gap-10 mb-8 theme-color-input">
          <div className="flex gap-4">
            <input
              value={numbers[0]}
              onChange={(e) => handleNumberChange(e, 0)}
              ref={(input) => (inputs.current[0] = input)}
              className="flex items-center p-4 w-20 h-20 text-7xl rounded-lg theme-color-outline"
              required={required}
              type="number"
            />
            <input
              value={numbers[1]}
              onChange={(e) => handleNumberChange(e, 1)}
              ref={(input) => (inputs.current[1] = input)}
              className="flex items-center p-4 w-20 h-20 text-7xl items-center justify-normal rounded-lg theme-color-outline"
              required={required}
              type="number"
            />
            <input
              value={numbers[2]}
              onChange={(e) => handleNumberChange(e, 2)}
              ref={(input) => (inputs.current[2] = input)}
              className="flex items-center p-4 w-20 h-20 text-7xl items-center justify-normal rounded-lg theme-color-outline"
              required={required}
              type="number"
            />
          </div>
          <div className="flex gap-4">
            <input
              value={numbers[3]}
              onChange={(e) => handleNumberChange(e, 3)}
              ref={(input) => (inputs.current[3] = input)}
              className="flex items-center p-4 w-20 h-20 text-7xl items-center justify-center rounded-lg theme-color-outline"
              required={required}
              type="number"
            />
            <input
              value={numbers[4]}
              onChange={(e) => handleNumberChange(e, 4)}
              ref={(input) => (inputs.current[4] = input)}
              className="flex items-center p-4 w-20 h-20 text-7xl items-center justify-normal rounded-lg theme-color-outline"
              required={required}
              type="number"
            />
            <input
              value={numbers[5]}
              onChange={(e) => handleNumberChange(e, 5)}
              ref={(input) => (inputs.current[5] = input)}
              className="flex items-center p-4 w-20 h-20 text-7xl items-center justify-normal rounded-lg theme-color-outline"
              required={required}
              type="number"
            />
          </div>
        </div>

        <Button
          type="submit"
          title="Verificar"
          className="p-2 rounded-md theme-btn"
        />
      </div>
    </form>
  )
}

export default CodeAuthBox
