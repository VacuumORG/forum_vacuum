import React, { useState, FunctionComponent } from 'react'
import Button from '../Button'
import {
  Paperclip,
  Image,
  AlignLeft,
  AlignRight,
  AlignCenterHorizontal,
  CaretDown,
} from '@phosphor-icons/react'
import UserAvatar from '../UserAvatar'

interface MarkdownProps {
  userName: string
  userAvatar: string
  response: boolean
}

const Markdown: FunctionComponent<MarkdownProps> = ({
  userName,
  userAvatar,
  response,
}) => {
  const [comment, setComment] = useState('')
  const [isBold, setIsBold] = useState<boolean>(false)
  const [isItalic, setIsItalic] = useState<boolean>(false)
  const [isUnderline, setIsUnderline] = useState<boolean>(false)
  const [align, setAlign] = useState<number>(1)
  const [isUppercase, setIsUppercase] = useState<boolean>(false)
  const [fontFamily, setFontFamily] = useState<string>('')

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value)
  }

  const handleBold = () => {
    setIsBold(!isBold)
  }

  const handleItalic = () => {
    setIsItalic(!isItalic)
  }

  const handleUnderline = () => {
    setIsUnderline(!isUnderline)
  }

  const handleAlign = () => {
    setAlign((prevCase) => {
      if (prevCase === 3) {
        return 1
      } else {
        return prevCase + 1
      }
    })
  }

  const handleUppercase = () => {
    setIsUppercase(!isUppercase)
  }

  const handleFontFamily = (event: { target: { value: any } }) => {
    const selectedFont = event.target.value

    switch (selectedFont) {
      case 'serif':
        setFontFamily('Times New Roman')
        break
      case 'sans':
        setFontFamily('Roboto')
        break
      case 'mono':
        setFontFamily('Liberation Sans')
        break
      default:
        setFontFamily('')
        break
    }
  }

  const operator = response == true ? 'block' : 'hidden'

  return (
    <div className={`${operator} bg-g08 rounded p-3 min-h-96 max-w-xl`}>
      <div className="flex gap-2 items-center justify-between mb-2">
        <div className="flex gap-2 items-center">
          <UserAvatar img={userAvatar} alf={userName} />
          <span className="font-semibold text-xs">
            Comentar como{' '}
            <span className="text-[var(--default)]">{userName}</span>
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="font-semibold text-xs">rascunhos</span>
          <span className="flex items-center justify-center font-semibold p-[2px] rounded text-[9px] w-3 h-3 mt-[-6px] bg-[var(--default)]">
            {8}
          </span>
        </div>
      </div>

      <article className="bg-white mb-4">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="texto (opcional)"
          className="border p-2 text-black w-full h-52 rounded-md"
        />
        <div className="flex items-center justify-center text-gray-700 rounded-md">
          <select
            value={fontFamily}
            onChange={handleFontFamily}
            className="font-semibold text-sm "
          >
            <option value="">Selecione uma fonte</option>
            <option value="serif">Times New Roman</option>
            <option value="sans">Roboto</option>
            <option value="mono">Liberation Sans</option>
          </select>

          <button
            onClick={handleBold}
            className={`mr-2 font-bold rounded-sm py-1 px-2 ${
              isBold ? 'bg-slate-400' : ''
            }`}
          >
            B
          </button>
          <button
            onClick={handleItalic}
            className={`mr-2 italic rounded-sm py-1 px-2 font-semibold ${
              isItalic ? 'bg-slate-400' : ''
            }`}
          >
            I
          </button>
          <button
            onClick={handleUnderline}
            className={`mr-2 underline rounded-sm py-1 px-2 font-semibold ${
              isUnderline ? 'bg-slate-400' : ''
            }`}
          >
            U
          </button>
          <button
            onClick={handleUppercase}
            className={`mr-2 underline rounded-sm py-1 px-2 font-semibold ${
              isUppercase ? 'bg-slate-400' : ''
            }`}
          >
            Aa
          </button>

          <button
            onClick={handleAlign}
            className={`mr-2 rounded-sm transition-all py-1 px-2 font-semibold text-2xl hover:bg-slate-400`}
          >
            {align === 1 ? (
              <AlignLeft />
            ) : align === 2 ? (
              <AlignCenterHorizontal />
            ) : (
              <AlignRight />
            )}
          </button>
        </div>
      </article>

      <section className="flex items-center justify-between">
        <article className="flex gap-2 text-2xl">
          <Image className="cursor-pointer transition-all hover:text-[var(--default)]" />
          <Paperclip className="cursor-pointer transition-all hover:text-[var(--default)]" />
        </article>
        <article className="flex gap-5">
          <Button
            title="salvar rascunho"
            className="py-2 px-6 rounded text-[var(--default)] cursor-pointer border border-[var(--default)] font-semibold text-xs hover:bg-[var(--default)] hover:text-white"
          />
          <Button
            title="COMENTAR"
            className="rounded bg-[var(--default)] transition-all cursor-pointer py-3 px-6 font-semibold text-xs hover:bg-purple-500"
          />
        </article>
      </section>

      <div
        className={`max-w-xl ${isBold ? 'font-semibold' : 'font-normal'} ${
          isItalic ? 'italic' : ''
        } ${isUnderline ? 'underline' : ''} ${
          align ? 'font-bold' : 'font-normal'
        } ${isUppercase ? 'uppercase' : ''} ${
          align === 1 ? 'text-start' : align === 2 ? 'text-center' : 'text-end'
        } ${
          fontFamily === 'Roboto'
            ? 'font-sans'
            : fontFamily === 'Times New Roman'
            ? 'font-serif'
            : 'font-mono'
        } break-words mt-2 `}
      >
        {comment}
      </div>
    </div>
  )
}

export default Markdown
