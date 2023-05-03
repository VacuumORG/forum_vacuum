import { FunctionComponent } from 'react'

interface TipsTagProps {
  content: string
}

const TipsTag: FunctionComponent<TipsTagProps> = ({
  content,
}: TipsTagProps) => {
  return (
    <span className="text-xs py-1 px-3 rounded-2xl theme-topic-tips">
      {content}
    </span>
  )
}

export default TipsTag
