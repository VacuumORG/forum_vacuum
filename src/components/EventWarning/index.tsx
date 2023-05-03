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
    <div className="flex items-center justify-center gap-4 w-96 h-32 p-2 rounded-lg cursor-pointer theme-event-warning">
      <div className="text-xl flex flex-col items-center p-3 rounded-md theme-event-warning-date">
        <time
          dateTime={datetime}
          className="mb-2 font-bold h-full theme-event-warning-title-and-date"
        >
          {month}
        </time>
        <time
          dateTime={datetime}
          className="text-3xl font-bold theme-event-warning-author"
        >
          {day}
        </time>
      </div>

      <div>
        <h1 className="font-bold text-xl theme-event-warning-title-and-date">
          {title}
        </h1>
        <p className="text-xs mb-4 theme-event-warning-description">
          {description}
        </p>

        <span className="text-xs theme-event-warning-description">
          by <strong className="theme-event-warning-author">{author}</strong>{' '}
        </span>
      </div>
    </div>
  )
}

export default EventWarning