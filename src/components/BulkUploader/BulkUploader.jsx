import { ReactComponent as UploadSVG } from '../../assets/svg/upload.svg'
import './BulkUploader.style.scss'

export function BulkUploader () {
  return (
    <div className='bulk-loader'>
      <div className='bulk-loader__content-wrapper'>
        <UploadSVG width={125} height={125} className='bulk-loader__icon' />
        <p className='bulk-loader__subtext'>Max 20MB (CSV/XLSX)</p>
      </div>
    </div>
  )
}
