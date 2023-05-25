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

const ProfileSettingsTextField: FunctionComponent<TextFieldProps> = ({
  id,
  label,
  icon,
  children,
  onFocusCapture,
  onBlurCapture,
  ...rest
}: TextFieldProps) => {
  const [border, setBorder] = useState('1px solid transparent')
  return (
    <div className="flex justify-between items-center">
      <label htmlFor={id} className="text-g09 font-medium text-[0.8125rem]">
        {label}
      </label>
      <div
        className="flex p-1 rounded bg-g08"
        style={{
          border: border,
        }}
      >
        {icon}
        <input
          name="input"
          id={id}
          className="focus:outline-none bg-g08 items-stretch w-full h-full px-2 text-[13px]"
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

export default ProfileSettingsTextField
