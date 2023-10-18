import { mockButtonCategory } from 'helpers'
import { TitleWithTooltip } from 'components'
import { ReactComponent as DownloadSVG } from '../../assets/svg/download-page.svg'
import Excel from '../../assets/image/excel-page.png'
import './BulkSampleDownloader.style.scss'

export function BulkSampleDownloader () {
  return (
    <div className='bulk-sample__wrapper'>
      <div className='bulk-sample__gap'>
        <TitleWithTooltip title='Download sample CSV file' sampleDownloader={Boolean} />
        <div>
          <ul className='bulk-sample__list'>
            {mockButtonCategory.map((item) => {
              return (
                <li key={item} className='bulk-sample__item'>
                  <div className='bulk-sample__content-holder'>
                    <DownloadSVG width={16} height={16} title='download' className='bulk-sample__icon' />
                    <p className='bulk-sample__subtext'>{item} Upload File</p>
                  </div>
                  <img src={Excel} alt='excel img' width={12} height={16} title='excel file' />
                </li>
              )
            })}

          </ul>
        </div>
      </div>
    </div>
  )
}
