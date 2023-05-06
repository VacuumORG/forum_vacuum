import {
  FocusEventHandler,
  FunctionComponent,
  HTMLInputTypeAttribute,
  useState,
} from 'react'

interface TextFieldProps {
  id?: string
  label?: string
  placeholder?: string
  icon?: JSX.Element
  children?: JSX.Element
  type?: HTMLInputTypeAttribute
  required?: boolean
  onFocusCapture?: FocusEventHandler<HTMLInputElement>
  onBlurCapture?: FocusEventHandler<HTMLInputElement>
  className?: string
}

const TextField: FunctionComponent<TextFieldProps> = ({
  id,
  label,
  placeholder,
  icon,
  children,
  type,
  required,
  onFocusCapture,
  onBlurCapture,
  className,
}: TextFieldProps) => {
  const [border, setBorder] = useState('1px solid transparent')
  return (
    <div className={className}>
      <label htmlFor={id} className="font-bold text-xs mb-1 theme-text">
        {label}
      </label>
      <div
        className="flex p-1 rounded theme-textfield-icon-box"
        style={{
          border: border,
        }}
      >
        {icon}
        <input
          type={type}
          name="input"
          id={id}
          className="focus:outline-none items-stretch w-full h-full px-2 text-[100%]"
          placeholder={placeholder}
          required={required}
          onFocus={() => {
            setBorder('1px solid var(--default)')
          }}
          onBlur={() => {
            setBorder('1px solid transparent')
          }}
          onFocusCapture={onFocusCapture}
          onBlurCapture={onBlurCapture}
        />
        {children}
      </div>
    </div>
  )
}

export default TextField
