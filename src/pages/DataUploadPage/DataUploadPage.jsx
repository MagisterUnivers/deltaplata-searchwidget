import { BulkCategorySelector, BulkSampleDownloader, BulkUploader } from 'components'
import { ReactComponent as HintSVG } from '../../assets/svg/info.svg'
import '../../components/BulkSampleDownloader/BulkSampleDownloader.style.scss'
import './DataUploadPage.style.scss'

function DataUploadPage () {
  return (
    <section style={{ paddingTop: '30px' }} aria-label='bulk uploader section'>
      <div className='container no-flex'>
        <div className='data-uploader__wrapper'>
          <div className='data-uploader'>
            <h1 className='data-uploader__title'>Bulk Uploads of Data</h1>
            <p className='data-uploader__subtitle'>Please select the correct data type you want to upload to match the data</p>
          </div>
          <div><BulkCategorySelector /></div>
        </div>
        <div className='data-uploader__content-container'>
          <div className='uploader-wrapper'>
            <div className='uploader-wrapper__title'>
              <h2 className='uploader-wrapper__text'>Address Bulk Upload</h2>
              <button className='uploader-wrapper__button'>
                <HintSVG width={14} height={14} className='uploader-wrapper__icon' />
              </button>
            </div>
            <p className='uploader-wrapper__subtext'>Drag and drop your files or select files from your local computer</p>
            <BulkUploader />
          </div>
          <div className='bulk-sample-container'><BulkSampleDownloader /></div>
        </div>
      </div>
    </section>
  )
}

export default DataUploadPage
