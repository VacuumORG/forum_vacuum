import { FunctionComponent } from 'react'
import TextField from '../TextField'
import Image from 'next/image'
import { MagnifyingGlass } from '@phosphor-icons/react'

interface MenuProps {
  children?: JSX.Element | JSX.Element[]
  className?: string
}

const Menu: FunctionComponent<MenuProps> = ({ className, children }) => {
  return (
    <header className={className}>
      <div className="flex items-center flex-shrink-0 mr-6">
        <Image
          width={90}
          height={90}
          src="/vacuum_logo.png"
          alt="Imagem de logo vacuum"
          priority
        />
        <span className="font-montserrat font-bold text-2xl leading-10">
          VACUUM
        </span>
      </div>

      <form className="w-1/2 flex flex-col gap-4">
        <TextField
          id="search"
          type={'text'}
          placeholder="Search"
          required
          className="text-gray-800"
        >
          <MagnifyingGlass
            width={24}
            height={24}
            weight="bold"
            color="black"
            alt="Magnifying Glass"
          />
        </TextField>
      </form>

      {children}
    </header>
  )
}

export default Menu
