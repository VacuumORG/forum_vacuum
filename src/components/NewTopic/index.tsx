import React from 'react'
import TextField from '../TextField'
import { useState } from 'react'
import { FunctionComponent } from 'react'

import UserAvatar from '../UserAvatar'
import Button from '../Button'
import { ImageSquare, Paperclip } from '@phosphor-icons/react'
import IconButton from '../IconButton'

interface NewTopicProps {
  username: string
  avatar: string
}

const NewTopic: FunctionComponent<NewTopicProps> = ({ username, avatar }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e: any) => {
    setIsOpen(false)
    e.preventDefault()
  }

  const handleSaveDraft = (e: any) => {
    setIsOpen(false)
  }

  function handleFocus() {
    setIsOpen(true)
  }

  return (
    <div
      className="w-full h-full rounded theme-component px-5 py-6 max-w-xl"
      onFocus={handleFocus}
    >
      <div className={isOpen ? 'flex flex-col' : 'flex flex-row'}>
        <div className="flex flex-row items-center mr-4 gap-4">
          <UserAvatar img={avatar} width={36} height={36} alf={'avatar'} />
          {isOpen && (
            <span className="text-w2 text-md font-bold">
              postar como <a className="text-default">{username}</a>
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
              placeholder="Texto (opcional)"
              className="focus:outline-none items-stretch text-b2 w-full px-2 text-xs mt-6 p-1 rounded"
              required
            />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2 ml-1">
                <IconButton
                  icon={
                    <ImageSquare
                      height={24}
                      width={24}
                      color="white"
                      alt="Image Square"
                    />
                  }
                />
                <IconButton
                  icon={
                    <Paperclip
                      height={24}
                      width={24}
                      color="white"
                      alt="Paperclip"
                    />
                  }
                />
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
                  className="bg-default text-w2 py-2 px-10 rounded text-sm"
                />
              </div>
            </div>
          </form>
        ) : (
          <TextField className="w-full" placeholder="postar na Vacuum" />
        )}
      </div>
    </div>
  )
}

export default NewTopic
