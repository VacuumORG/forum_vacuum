import { Popover } from '@headlessui/react'
import { UserCircle } from '@phosphor-icons/react'
import { FunctionComponent, MouseEventHandler } from 'react'
import UserOptions from './UserOptions'

interface UserAreaProps {
  message?: string
  userName?: string
  icon?: JSX.Element
  onClickEventOne?: MouseEventHandler<HTMLButtonElement>
  onClickEventTwo?: MouseEventHandler<HTMLButtonElement>
}

const UserArea: FunctionComponent<UserAreaProps> = ({
  message = 'entre',
  userName = 'cadastra-se',
  icon = <UserCircle width={45} height={45} />,
  onClickEventOne,
  onClickEventTwo,
}) => {
  return (
    <div className="flex items-center">
      <Popover>
        <Popover.Button>
          <div className="flex-shrink-0">{icon}</div>
        </Popover.Button>
        <Popover.Panel className="absolute">
          <UserOptions />
        </Popover.Panel>
      </Popover>

      <div className="ml-3 font-bold flex flex-col items-start">
        <button onClick={onClickEventOne} className="text-sm font-bold">
          {message}
        </button>
        <button onClick={onClickEventTwo} className="text-sm theme-text-purple">
          {userName}
        </button>
      </div>
    </div>
  )
}

export default UserArea
