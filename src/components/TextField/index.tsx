import Image from 'next/image'
import { FunctionComponent, HTMLInputTypeAttribute } from 'react'

interface TextFieldProps {
  id?: string
  label?: string
  placeholder?: string
  icon: string
  children?: JSX.Element
  type?: HTMLInputTypeAttribute
  required?: boolean
  hiddenIcon?: boolean
}

const TextField: FunctionComponent<TextFieldProps> = ({
  id,
  label,
  placeholder,
  icon,
  children,
  type,
  required,
  hiddenIcon = false,
}: TextFieldProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-bold text-xs theme-text mb-1">
        {label}
      </label>
      <div className="flex p-1 theme-textfield-icon-box visited:bg-slate-950 rounded">
        <Image
          hidden={hiddenIcon}
          className="mr-1"
          src={icon}
          alt="icon"
          width={24}
          height={24}
        />
        <input
          type={type}
          name="input"
          id={id}
          className="focus:outline-none items-stretch w-full px-2 text-xs"
          placeholder={placeholder}
          required={required}
        />
        {children}
      </div>
    </div>
  )
}

export default TextField
