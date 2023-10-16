import { ReactComponent as Trash } from '../../assets/svg/trash.svg'
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right-rendered.svg'
import './Button.style.scss'

export function Button ({ text, ariaLabel, className, type }) {
  let buttonContents

  switch (type) {
    case 'trash':
      buttonContents = (
        <>
          <Trash width={16} height={16} className='color' />
          {text}
        </>
      )
      break
    case 'advancedSearch':
      buttonContents = (
        <>{text} <ArrowRight width={16} height={16} /></>
      )
      break
    default:
      buttonContents = text
  }

  return (
    <button type='button' aria-label={ariaLabel} className={className}>
      {buttonContents}
    </button>
  )
}
