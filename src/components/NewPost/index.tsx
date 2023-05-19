import React, { useState, useEffect, FunctionComponent } from 'react'
import TextField from '../TextField'
import UserAvatar from '../UserAvatar'
import Button from '../Button'
import { ImageSquare, Paperclip } from '@phosphor-icons/react'
import IconButton from '../IconButton'

interface NewPostProps {
  username: string
  avatar: string
}

const NewPost: FunctionComponent<NewPostProps> = ({ username, avatar }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState({ title: '', content: '' })

  useEffect(() => {
    const savedDraft = localStorage.getItem('savedDraft')
    if (savedDraft) {
      setDraft(JSON.parse(savedDraft))
    }
  }, [])

  const handleSubmit = (e: any) => {
    setIsOpen(false)
    e.preventDefault()
  }

  const handleSaveDraft = (e: any) => {
    e.preventDefault()
    const title = (document.getElementById('title') as HTMLInputElement).value
    const content = (document.getElementById('content') as HTMLTextAreaElement)
      .value
    const newDraft = { title, content }
    setDraft(newDraft)
    localStorage.setItem('savedDraft', JSON.stringify(newDraft))
    setIsOpen(false)
  }

  function handleFocus() {
    setIsOpen(true)
  }

  return (
    <div className="w-full h-full rounded theme-component px-5 py-6 max-w-xl">
      <div
        className={isOpen ? 'flex flex-col' : 'flex flex-row'}
        onFocus={handleFocus}
      >
        <div className="flex flex-row items-center mr-4 gap-4">
          <UserAvatar img={avatar} width={36} height={36} alf={'avatar'} />
          {isOpen && (
            <span className="text-w2 text-md font-bold">
              Você está postando como <a className="text-default">{username}</a>
            </span>
          )}
        </div>
        {isOpen ? (
          <form onSubmit={handleSubmit} className="mt-10 gap-6">
            <TextField
              id="title"
              className="text-b2"
              type="text"
              placeholder="Título"
              required
            />
            <textarea
              id="content"
              rows={8}
              placeholder="Texto"
              className="focus:outline-none items-stretch text-b2 w-full px-2 text-xs mt-6 p-1 rounded"
              required
              defaultValue={draft.content}
            />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2 ml-1">
                <IconButton
                  icon={
                    <ImageSquare
                      className="cursor-pointer hover:bg-gray-700 rounded"
                      height={24}
                      width={24}
                      color="white"
                      alt="Image Square, use this icon to upload an image"
                    />
                  }
                />
                <IconButton
                  icon={
                    <Paperclip
                      className="cursor-pointer hover:bg-gray-700 rounded"
                      height={24}
                      width={24}
                      color="white"
                      alt="Paperclip, use this icon to upload a file"
                    />
                  }
                />
              </div>
              <div className="flex justify-end mt-4">
                <Button
                  type="button"
                  title="Salvar rascunho"
                  className="theme-secondary-btn rounded py-2 px-10 text-sm mr-4"
                  onClick={handleSaveDraft}
                />
                <Button
                  type="submit"
                  title="Postar"
                  className="bg-default text-w2 py-2 px-10 rounded text-sm"
                />
              </div>
            </div>
          </form>
        ) : (
          <div
            className="flex flex-row justify-between w-full"
            onClick={handleFocus}
          >
            <TextField
              className="w-full"
              placeholder="Participe da discussão..."
            >
              <div className="flex flex-row gap-1 ml-1">
                <ImageSquare
                  className="cursor-pointer hover:bg-gray-200 rounded"
                  height={15}
                  width={15}
                  color="#4C4C4C"
                  alt="Image Square, use this icon to upload an image"
                />
                <Paperclip
                  className="cursor-pointer hover:bg-gray-200 rounded"
                  height={15}
                  width={15}
                  color="#4C4C4C"
                  alt="Paperclip, use this icon to upload a file"
                />
              </div>
            </TextField>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewPost
