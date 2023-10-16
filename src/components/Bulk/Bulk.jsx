import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Upload } from '../../assets/svg/upload.svg'
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg'
import { ReactComponent as Hint } from '../../assets/svg/info.svg'
import { ReactComponent as Polygon } from '../../assets/svg/polygon.svg'
import './Bulk.style.scss'

export function Bulk () {
  const navigate = useNavigate()
  const [isHintVisible, setIsHintVisible] = useState(false)

  function toggleHint () {
    setIsHintVisible(!isHintVisible)
  };

  return (
    <div className='bulk-uploader'>
      <div className='bulk-header__section'>
        <div className='bulk-header__container'>
          <h2 className='bulk-title'>Bulk Upload</h2>
          <Hint
            width={14}
            height={14}
            className='bulk-header__hint'
            onClick={toggleHint}
          />
          {isHintVisible && (
            <div className='hint-container'>
              <p className='hint-text'>Search with whatever information field you have. Upload your CSV file. Please <span onClick={() => console.log('File sended')} className='hint-text hint-text__underline'>download the CSV sample here.</span></p>
              <Polygon width={16} height={10.82} className='hint-polygon' />
            </div>)}
        </div>
        <div className='bulk-header__container'>
          <ArrowRight
            width={16}
            height={16}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('')}
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
