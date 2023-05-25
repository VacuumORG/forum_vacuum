import { FunctionComponent } from 'react'
import { Popover } from '@headlessui/react'
import Image from 'next/image'

interface UserLoggedProps {
  message?: string
  userName?: string
}

const UserLogged: FunctionComponent<UserLoggedProps> = ({
  message = 'bem vindo,',
  userName = 'John Doe',
}) => {
  return (
    <div className="flex items-center">
      <Popover>
        <Popover.Button>
          <Image
            src="/unsplashAvatar.jpg"
            alt="user"
            width={45}
            height={45}
            className="rounded-full"
          />
        </Popover.Button>
        <Popover.Panel className="absolute"></Popover.Panel>
      </Popover>

      <div className="ml-3 font-bold flex flex-col items-start">
        <strong className="text-sm font-bold">{message}</strong>
        <strong className="text-sm theme-text-purple">{userName}</strong>
      </div>
    </div>
  )
}

export default UserLogged
