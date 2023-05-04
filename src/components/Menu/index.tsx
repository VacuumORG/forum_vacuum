import { FunctionComponent, useState } from 'react'
import TextField from '../TextField'
import Image from 'next/image'
import IconButton from '../IconButton'
import UserAvatar from '../UserAvatar'

interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = () => {
  return (
    <header className="flex items-center justify-between flex-wrap px-20 theme-menu">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image width={90} height={90} src="/vacuum_logo.png" alt="" />
        <span className="font-montserrat font-bold text-2xl leading-10">
          VACUUM
        </span>
      </div>

      <form action="#" className="w-1/2 flex flex-col gap-4">
        <TextField id="search" type={'text'} placeholder="Search" required>
          <IconButton icon={'/icon_search.svg'} w={24} h={24} />
        </TextField>
      </form>

      <div className="flex items-center">
        <div className="flex-shrink-0">
          <UserAvatar alf="User avatar" img={'/user_avatar.png'} />
        </div>
        <div className="ml-3 font-bold flex flex-col">
          Bem vindo,
          <span className="text-gray-400 text-sm theme-text-purple">
            offKevyn
          </span>
        </div>
      </div>
    </header>
  )
}

export default Menu
