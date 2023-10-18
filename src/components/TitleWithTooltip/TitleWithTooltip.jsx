import { useState } from 'react'
import { createPortal } from 'react-dom'
import { CustomAlert } from 'components'
import { ReactComponent as Hint } from '../../assets/svg/info.svg'
import { ReactComponent as Polygon } from '../../assets/svg/polygon.svg'
import '../Bulk/Bulk.style.scss'

export function TitleWithTooltip ({ title, sampleDownloader }) {
  const [showAlert, setShowAlert] = useState(false)

  function displayAlert () {
    setShowAlert(true)

    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
  }

  return (
    <div className='bulk-header__container'>
      <h2 className='bulk-title'>{title}</h2>
      <button type='button' aria-label='hint button, to download file' className='bulk-header__hint'>
        <Hint
          width={14}
          height={14}
        />
        <div className='hint-container' style={sampleDownloader ? { right: '43.5px' } : { right: '-19.5px' }}>
          <div className='hint-container__content-wrapper'>
            <p className='hint-text'>Search with whatever information field you have. Upload your CSV file. Please <span onClick={() => displayAlert()} className='hint-text hint-text__underline'>download the CSV sample here.</span></p>
            <Polygon width={16} height={10.82} className='hint-polygon' />
          </div>
        </div>
      </button>

      {showAlert &&
            createPortal(
              <CustomAlert message='File sended' className={`custom-alert ${showAlert ? '' : 'hide'}`} />,
              document.querySelector('#root')
            )}
    </div>
  )
}
