import React, { useState, FunctionComponent } from 'react'
import Button from '../Button'
import { Paperclip, Image } from '@phosphor-icons/react'

import UserAvatar from '../UserAvatar'
import User from '../../../public/user_avatar.png'

interface MarkdownProps {
  username: string
  avatar: string
}

const Markdown: FunctionComponent<MarkdownProps> = () => {
  const [comment, setComment] = useState('')
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [align, setAlign] = useState(false)
  const [isQuotationMarks, setIsQuotationMarks] = useState(false)

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
    setIsUnderline(!align)
  }

  return (
    <div className="bg-g08 rounded p-3 h-96 max-w-xl">
      <div className="flex gap-2 items-center justify-between mb-2">
        <div className="flex gap-2 items-center">
          <UserAvatar img={User} alf="txt" />
          <span className="font-semibold text-xs">Comentar como...</span>
        </div>
        <span className="font-semibold text-xs">rascunhos</span>
      </div>

      <article className="bg-white text-black mb-4">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="texto (opcional)"
          className="border p-2 text-black w-full h-52"
        />
        <div className="flex items-center justify-center">
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
            className={`mr-2 underline rounded-sm py-1 px-2 font-medium ${
              isUnderline ? 'bg-slate-400' : ''
            }`}
          >
            U
          </button>
          <button
            onClick={handleUnderline}
            className={`mr-2 underline rounded-sm py-1 px-2 font-medium ${
              isUnderline ? 'bg-slate-400' : ''
            }`}
          ></button>
        </div>
      </article>

      <section className="flex items-center justify-between">
        <article className="flex gap-2 text-2xl">
          <Image />
          <Paperclip />
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
          isItalic ? 'italic' : 'font-normal'
        } ${isUnderline ? 'underline' : ''} ${
          align ? 'font-bold' : 'font-normal'
        }`}
      >
        {comment}
      </div>
    </div>
  )
}

export default Markdown
