import { ReactComponent as Trash } from '../../assets/svg/trash.svg'
import './Button.style.scss'

export const Button = ({ text }) => {
  return (
    <button type='button' aria-label='button for cleaning' className='btn'>
      <Trash width={16} height={16} />
      {text}
    </button>
  )
}
