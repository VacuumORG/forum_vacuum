import { UserCircle } from '@phosphor-icons/react'
import { FunctionComponent } from 'react'

interface UserAreaProps {
  message?: string
  userName?: string
  icon?: JSX.Element
}

const UserArea: FunctionComponent<UserAreaProps> = ({
  message = 'entre',
  userName = 'cadastra-se',
  icon = <UserCircle width={45} height={45} />,
}) => {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0">{icon}</div>
      <div className="ml-3 font-bold flex flex-col items-start">
        <button className="text-sm font-bold">{message}</button>
        <button className="text-sm theme-text-purple">{userName}</button>
      </div>
    </div>
  )
}

export default UserArea
