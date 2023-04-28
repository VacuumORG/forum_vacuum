import { FunctionComponent, MouseEventHandler } from 'react'

interface ButtonProps {
  className?: string
  title?: string
  type?: 'submit' | 'reset' | 'button'
  onClick?: MouseEventHandler<HTMLButtonElement>
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
}

const Button: FunctionComponent<ButtonProps> = ({
  className,
  title,
  type = 'button',
  onClick,
  iconLeft,
  iconRight,
}: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {iconRight}
      {title}
      {iconLeft}
    </button>
  )
}

export default Button
