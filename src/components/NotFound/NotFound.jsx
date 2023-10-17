import { Button } from 'components'
import robotSearch from '../../assets/image/robot-search.png'
import robotSearch2x from '../../assets/image/robot-search@2x.png'
import './NotFound.style.scss'

export function NotFound () {
  return (
    <div className='not-found__container'>
      <picture>
        <source srcSet={robotSearch2x} media='(min-width: 1440px)' />
        <img
          srcSet={robotSearch}
          alt='assistant looking for stuff'
          className='not-found__image'
          width={202.364}
          height={300}
        />
      </picture>
      <h2 className='not-found__title'>
        Opp ! I don't see any matching data
      </h2>
      <p className='not-found__subtitle'>Sorry, the keyword you searched for did not match the data. <br />
        Don't worry, try another way.
      </p>
      <Button text='Advanced Search' type='advancedSearch' ariaLabel='button for advanced search' className='btn-search padding' />
    </div>
  )
}
