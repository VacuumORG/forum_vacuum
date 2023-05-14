import { FunctionComponent, MouseEventHandler, ReactElement } from 'react'

interface IconButtonProps {
  icon: ReactElement
  className?: string
  w?: number
  h?: number
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'submit' | 'reset' | 'button'
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  icon,
  className,
  onClick,
  type = 'button',
}: IconButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {icon}
    </button>
  )
}

export default IconButton
