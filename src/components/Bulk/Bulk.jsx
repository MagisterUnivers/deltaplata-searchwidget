import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { CustomAlert } from 'components'
import { ReactComponent as Upload } from '../../assets/svg/upload.svg'
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg'
import { ReactComponent as Hint } from '../../assets/svg/info.svg'
import { ReactComponent as Polygon } from '../../assets/svg/polygon.svg'
import './Bulk.style.scss'

export function Bulk () {
  const navigate = useNavigate()
  const [showAlert, setShowAlert] = useState(false)

  function displayAlert () {
    setShowAlert(true)

    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
  }

  return (
    <div className='bulk-uploader'>
      <div className='bulk-header__section'>
        <div className='bulk-header__container'>
          <h2 className='bulk-title'>Bulk Upload</h2>
          <button type='button' aria-label='hint button, to download file' className='bulk-header__hint'>
            <Hint
              width={14}
              height={14}
            />
            <div className='hint-container'>
              <p className='hint-text'>Search with whatever information field you have. Upload your CSV file. Please <span onClick={() => displayAlert()} className='hint-text hint-text__underline'>download the CSV sample here.</span></p>
              <Polygon width={16} height={10.82} className='hint-polygon' />
            </div>
          </button>

          {showAlert &&
            createPortal(
              <CustomAlert message='File sended' className={`custom-alert ${showAlert ? '' : 'hide'}`} />,
              document.querySelector('#root')
            )}
        </div>
        <div className='bulk-header__container'>
          <ArrowRight
            width={16}
            height={16}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
        </div>
      </div>
      <div className='bulk-uploader__container'>
        <Upload width={32} height={32} />
        <p className='bulk-subtext'>Max 20MB</p>
      </div>
    </div>
  )
}
