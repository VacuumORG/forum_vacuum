import { FunctionComponent, SVGAttributes } from 'react'

interface DefaultIconProps extends SVGAttributes<SVGElement> {}

export const DefaultIcon: FunctionComponent<DefaultIconProps> = ({
  ...rest
}) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M11.3517 20.4167L11.9642 14.5833H5.83334V11.6667H12.2719L13.0375 4.375H15.9702L15.2046 11.6667H21.0219L21.7875 4.375H24.7202L23.9546 11.6667H29.1667V14.5833H23.6483L23.0358 20.4167H29.1667V23.3333H22.7281L21.9625 30.625H19.0298L19.7954 23.3333H13.9781L13.2125 30.625H10.2798L11.0454 23.3333H5.83334V20.4167H11.3517ZM14.2844 20.4167H20.1031L20.7156 14.5833H14.8969L14.2844 20.4167Z" />
    </svg>
  )
}
