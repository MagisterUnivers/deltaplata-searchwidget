import { BulkCategorySelector, BulkSampleDownloader, BulkUploader, TitleWithTooltip } from 'components'
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
            <div className='bulk-header__container'>
              <TitleWithTooltip title='Address Bulk Upload' />
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
