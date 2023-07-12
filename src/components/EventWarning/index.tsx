import { FunctionComponent } from 'react'

interface EventWarningProps {
  author: string
  month: string | number
  day: number
  title: string
  description: string
  datetime: string
}

const EventWarning: FunctionComponent<EventWarningProps> = ({
  author,
  month,
  day,
  title,
  description,
  datetime,
}: EventWarningProps) => {
  return (
    <div className="flex items-start gap-4 p-2 rounded-lg cursor-pointer bg-g06 hover:bg-g08">
      <div className="text-xl flex flex-col items-center p-3 rounded-md bg-g08">
        <time
          dateTime={datetime}
          className="mb-2 text-lg font-bold h-full text-g01"
        >
          {month}
        </time>
        <time dateTime={datetime} className="text-2xl font-bold text-default">
          {day}
        </time>
      </div>

      <div>
        <span className="font-bold text-xs text-g01">{title}</span>
        <p className="text-xs mb-4 text-g09">{description}</p>

        <span className="text-xs text-g09">
          by <strong className="text-default">{author}</strong>{' '}
        </span>
      </div>
    </div>
  )
}

export default EventWarning
