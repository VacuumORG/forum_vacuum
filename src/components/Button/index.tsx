import { FunctionComponent, MouseEventHandler } from 'react'

interface ButtonProps {
  className?: string
  title?: string
  type?: 'submit' | 'reset' | 'button'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FunctionComponent<ButtonProps> = ({
  className,
  title,
  type = 'button',
  onClick,
}: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
