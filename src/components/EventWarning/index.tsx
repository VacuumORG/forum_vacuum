interface EventWarningProps {
    author: string
    month: string | number
    day: number
    title: string
    description: string
  }
  
  const EventWarning = ({
    author,
    month,
    day,
    title,
    description,
  }: EventWarningProps) => {
    return (
      <div className="flex items-center justify-center gap-4 event-warning w-70 h-32 p-2">
        <div className="text-xl theme-date flex flex-col items-center p-3 rounded-md">
          <h1 className="mb-2 theme-event-warning-title-and-date font-bold h-full">
            {month}
          </h1>
          <h2 className="text-3xl font-bold theme-author">{day}</h2>
        </div>
  
        <div>
          <h1 className="theme-event-warning-title-and-date font-bold text-xl">
            {title}
          </h1>
          <p className="text-xs theme-description mb-4">{description}</p>
  
          <span className="text-xs theme-description">
            by <strong className="theme-author">{author}</strong>{' '}
          </span>
        </div>
      </div>
    )
  }
  
  export default EventWarning
  