import Image from 'next/image'
import Button from '../Button'
import pictureIcon from '#/public/picture.svg'
import anexoIcon from '#/public/anexo.svg'
import TextField from '@/components/TextField'
import { useState } from 'react'

const NewPostForm = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  const handleSaveDraft = (e: any) => {
    setIsOpen(false)
  }

  function handleFocus() {
    setIsOpen(true)
  }
  return (
    <form className="mt-10 gap-6 text-black">
      <TextField id="title" type={'text'} placeholder={'Título'} />
      <textarea
        id="content"
        rows={8}
        placeholder={'Texto (opcional)'}
        className={
          'focus:outline-none items-stretch w-full px-2 text-xs mt-6 p-1 rounded'
        }
      />
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 ml-1">
          <Image
            src={pictureIcon}
            height={24}
            width={24}
            alt={'picture icon'}
          />
          <Image src={anexoIcon} height={24} width={24} alt={'anexo icon'} />
        </div>
        <div className="flex justify-end mt-4">
          <Button
            type="button"
            title="salvar rascunho"
            className="theme-secondary-btn rounded py-2 px-10 text-sm mr-4"
            onClick={handleSaveDraft}
          />
          <Button
            type="submit"
            title="postar"
            className="theme-btn py-2 px-10 rounded text-sm"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </form>
  )
}

export default NewPostForm
