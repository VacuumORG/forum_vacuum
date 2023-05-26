import {
  ButtonHTMLAttributes,
  FunctionComponent,
  MouseEventHandler,
} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  ...rest
}: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick} {...rest}>
      {iconRight}
      {title}
      {iconLeft}
    </button>
  )
}

export default Button
