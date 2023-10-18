import { ReactComponent as UploadSVG } from '../../assets/svg/upload.svg'
import './BulkUploader.style.scss'

export function BulkUploader () {
  return (
    <div className='bulk-uploader'>
      <div className='bulk-uploader__content-wrapper'>
        <UploadSVG width={125} height={125} className='bulk-uploader__icon' />
        <p className='bulk-uploader__subtext'>Max 20MB (CSV/XLSX)</p>
      </div>
    </div>
  )
}
