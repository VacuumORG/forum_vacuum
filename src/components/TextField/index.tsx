import {
  FocusEventHandler,
  FunctionComponent,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from 'react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string
  label?: string
  icon?: JSX.Element
  children?: ReactNode
  onFocusCapture?: FocusEventHandler<HTMLInputElement>
  onBlurCapture?: FocusEventHandler<HTMLInputElement>
  className?: string
}

const TextField: FunctionComponent<TextFieldProps> = ({
  id,
  label,
  icon,
  children,
  onFocusCapture,
  onBlurCapture,
  className,
  ...rest
}: TextFieldProps) => {
  const [border, setBorder] = useState('1px solid transparent')
  return (
    <div className={className}>
      <label htmlFor={id} className="font-bold text-xs mb-1 theme-text">
        {label}
      </label>
      <div
        className="flex p-1 rounded theme-textfield-icon-box items-center"
        style={{
          border: border,
        }}
      >
        {icon}
        <input
          name="input"
          id={id}
          className="focus:outline-0 focus:ring-0 focus:border-none border-none outline-none ring-0 items-stretch w-full h-full px-2 text-[100%]"
          onFocus={() => {
            setBorder('1px solid var(--default)')
          }}
          onBlur={() => {
            setBorder('1px solid transparent')
          }}
          onFocusCapture={onFocusCapture}
          onBlurCapture={onBlurCapture}
          autoComplete="off"
          {...rest}
        />
        {children}
      </div>
    </div>
  )
}

export default TextField
