import { useNavigate } from 'react-router-dom'
import { TitleWithTooltip } from 'components'
import { ReactComponent as Upload } from '../../assets/svg/upload.svg'
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg'
import './Bulk.style.scss'

export function Bulk () {
  const navigate = useNavigate()

  return (
    <div className='bulk-uploader'>
      <div className='bulk-header__section'>
        <TitleWithTooltip title='Bulk Upload' />
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
