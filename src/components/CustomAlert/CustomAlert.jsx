import './CustomAlert.style.scss'

export function CustomAlert ({ message, className }) {
  return (
    <div className={className}>
      <p>{message}</p>
    </div>
  )
}
