import './CustomAlert.style.scss'

export function CustomAlert ({ message, onClose }) {
  return (
    <div className='custom-alert'>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  )
}
