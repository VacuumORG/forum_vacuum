import Image, { StaticImageData } from 'next/image'
import { FunctionComponent } from 'react'

interface UserAvatarProps {
  img: string | StaticImageData
  alf: string
  width?: number
  height?: number
}

const UserAvatar: FunctionComponent<UserAvatarProps> = ({
  img,
  alf,
  width = 36,
  height = 36,
}: UserAvatarProps) => {
  return (
    <Image
      className="rounded-[50%]"
      width={width}
      height={height}
      src={img}
      alt={alf}
    />
  )
}

export default UserAvatar
