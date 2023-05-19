import {
  FunctionComponent,
  useRef,
  useState,
  ChangeEvent,
  FormEvent,
  RefObject,
} from 'react'
import { CaretLeft } from '@phosphor-icons/react'
import Button from '../Button'

interface CodeAuthBoxProps {
  emailUser?: string
  required?: boolean
  modalRef?: RefObject<HTMLDialogElement>
  nextStep?: () => void
  backStep?: () => void
}

interface InputProps {
  numberInput: number
}

const CodeAuthBox: FunctionComponent<CodeAuthBoxProps> = ({
  emailUser,
  required,
  nextStep,
  backStep,
}: CodeAuthBoxProps) => {
  const [numbers, setNumbers] = useState<Array<string>>([
    '',
    '',
    '',
    '',
    '',
    '',
  ])

  const ArrayInput: InputProps[] = [
    { numberInput: 0 },
    { numberInput: 1 },
    { numberInput: 2 },
    { numberInput: 3 },
    { numberInput: 4 },
    { numberInput: 5 },
  ]

  const firstPart = ArrayInput.slice(0, 3)
  const secondPart = ArrayInput.slice(3, 6)

  const inputs = useRef<Array<HTMLInputElement | null>>([])

  const handleNumberChange = (
    event: ChangeEvent<HTMLInputElement>,
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    nextStep!()
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
          <a
            className="theme-text text-xs cursor-pointer"
            onClick={() => backStep!()}
          >
            voltar
          </a>
        </div>

        <p className="theme-text text-xs">Etapa 2 de 3</p>
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
            {firstPart.map((number) => {
              return (
                <input
                  key={number.numberInput}
                  value={numbers[number.numberInput]}
                  onChange={(e) => handleNumberChange(e, number.numberInput)}
                  ref={(input) => (inputs.current[number.numberInput] = input)}
                  className="flex items-center p-4 w-20 h-20 text-7xl rounded-lg theme-color-outline"
                  required={required}
                  type="number"
                  min="0"
                  max="9"
                />
              )
            })}
          </div>

          <div className="flex gap-4">
            {secondPart.map((number) => {
              return (
                <input
                  key={number.numberInput}
                  value={numbers[number.numberInput]}
                  onChange={(e) => handleNumberChange(e, number.numberInput)}
                  ref={(input) => (inputs.current[number.numberInput] = input)}
                  className="flex items-center p-4 w-20 h-20 text-7xl rounded-lg theme-color-outline"
                  required={required}
                  type="number"
                  min="0"
                  max="9"
                />
              )
            })}
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
