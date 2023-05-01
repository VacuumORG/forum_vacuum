import { FunctionComponent, useState } from 'react'
import TextField from '../TextField'
import Image from 'next/image'
import IconButton from '../IconButton'
import UserAvatar from '../UserAvatar'

interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = () => {
  return (
    <nav
      style={{ backgroundColor: 'var(--grey06)' }}
      className="flex items-center justify-between flex-wrap px-20"
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image width={90} height={90} src="/vacuum_logo.svg" alt="" />
        <div className="font-montserrat font-bold text-2xl leading-10">
          VACUUM
        </div>
      </div>
      <div className="w-1/2">
        <form action="#" className="flex flex-col gap-4">
          <div>
            <TextField id="search" type={'text'} placeholder="Search" required>
              <IconButton
                icon={'/icon_search.svg'}
                w={24}
                h={24}
                onClick={() => {
                  console.log()
                }}
              />
            </TextField>
          </div>
        </form>
      </div>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <UserAvatar alf="User avatar" img={'/user_avatar.png'} />
        </div>
        <div className="ml-3  font-bold">
          <div className="text-white">
            Bem vindo,
            <div className="text-gray-400 text-sm theme-text-purple">
              offKevyn
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu
