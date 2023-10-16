import { ReactComponent as Trash } from '../../assets/svg/trash.svg'
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right-rendered.svg'
import '../Header/Header.style.scss'
import './Button.style.scss'

export function Button ({ text, ariaLabel, className, type, handleSend }) {
  let buttonContents

  switch (type) {
    case 'trash':
      buttonContents = (
        <>
          <Trash width={16} height={16} className='color-grey' />
          {text}
        </>
      )
      break
    case 'advancedSearch':
      buttonContents = (
        <>{text} <ArrowRight width={16} height={16} className='color-black' /></>
      )
      break
    default:
      buttonContents = text
  }

  return (
    <button type='button' aria-label={ariaLabel} className={className} onClick={handleSend}>
      {buttonContents}
    </button>
  )
}
