import { FunctionComponent } from 'react'
import { UserCircle } from '@phosphor-icons/react'
import Link from 'next/link'

interface Props {
  userName?: string
}

const UserOptions: FunctionComponent = ({ userName = 'UserName' }: Props) => {
  return (
    <div className="bg-g08 flex flex-col rounded w-[180px] pt-[10px] pl-[10px] pb-[15px] gap-[20px]">
      <div className="flex items-center gap-1">
        <div className="flex-shrink-0">
          <UserCircle width={45} height={45} />
        </div>
        <span className="block">{userName}</span>
      </div>
      <Link href="/user-profile" className="hover:text-default cursor-pointer">
        Configurações
      </Link>
    </div>
  )
}

export default UserOptions
