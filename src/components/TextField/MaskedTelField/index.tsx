import React, {
  useState,
  InputHTMLAttributes,
  FunctionComponent,
  ChangeEvent,
  FocusEventHandler,
  ReactNode,
} from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: JSX.Element
  children?: ReactNode
  required?: boolean
  onFocusCapture?: FocusEventHandler<HTMLInputElement>
  onBlurCapture?: FocusEventHandler<HTMLInputElement>
}

const MaskedTelField: FunctionComponent<Props> = ({
  id,
  label,
  icon,
  children,
  type,
  onFocusCapture,
  onBlurCapture,
  className,
  ...rest
}) => {
  const [phone, setPhone] = useState<string>('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = event.target.value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '+$1 $2')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2')
    setPhone(phoneNumber)
  }
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
          type="tel"
          onChange={handleChange}
          value={phone}
          name="input"
          className="focus:outline-none items-stretch w-full h-full px-2 text-[100%]"
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

export default MaskedTelField
