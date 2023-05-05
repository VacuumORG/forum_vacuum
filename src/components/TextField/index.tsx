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
}: TextFieldProps) => {
  const [border, setBorder] = useState('1px solid transparent')
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="font-bold text-xs theme-text mb-1">
        {label}
      </label>
      <div
        className="flex p-1 theme-textfield-icon-box visited:bg-slate-950 rounded"
        style={{
          border: border,
        }}
      >
        {icon}
        <input
          type={type}
          name="input"
          id={id}
          className="focus:outline-none items-stretch w-full px-2 text-xs"
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
