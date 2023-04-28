import Image from 'next/image'
import { FunctionComponent, MouseEventHandler } from 'react'

interface IconButtonProps {
  icon: string
  className?: string
  w?: number
  h?: number
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'submit' | 'reset' | 'button'
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  icon,
  className,
  w,
  h,
  onClick,
  type = 'button',
}: IconButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      <Image className="mr-1" src={icon} alt="icon" width={w} height={h} />
    </button>
  )
}

export default IconButton
