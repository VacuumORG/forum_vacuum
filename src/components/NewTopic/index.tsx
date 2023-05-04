import React from 'react'
import TextField from '../TextField'
import { useState } from 'react'
import NewPostForm from '../NewPostForm'
import { FunctionComponent } from 'react'

import UserAvatar from '../UserAvatar'

const username = 'sonhos'

interface UserProps {
  username: string
  avatar: string
}

const NewTopic: FunctionComponent<UserProps> = ({ username, avatar }) => {
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
    <div
      className="w-full h-full rounded theme-component px-5 py-6 max-w-xl mx-auto mt-10"
      onFocus={handleFocus}
    >
      <div className={isOpen ? 'flex flex-col' : 'flex flex-row'}>
        <div className="flex flex-row items-center mr-4 gap-4">
          <UserAvatar img={avatar} width={36} height={36} alf={'avatar'} />
          {isOpen && (
            <span className="theme-text text-md font-bold">
              postar como <a className="theme-text-purple">{username}</a>
            </span>
          )}
        </div>
        {isOpen ? (
          <NewPostForm />
        ) : (
          <TextField placeholder="postar na Vacuum" />
        )}
      </div>
    </div>
  )
}

export default NewTopic
