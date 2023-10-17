import { SearchForm } from 'components'
import robothiImage from '../../assets/image/robot-hi.png'
import robothi2xImage from '../../assets/image/robot-hi@2x.png'
import './Hero.style.scss'

export function Hero () {
  return (
    <div className='hero-container'>
      <picture>
        <source srcSet={robothi2xImage} media='(min-width: 1440px)' />
        <img
          srcSet={robothiImage}
          alt='assistant says hi'
          className='hero-container__image'
          width={300}
          height={377.574}
        />
      </picture>

      <div className='hero-text__container'>
        <h2 className='hero-container__title'>
          Hi there ! I'm your search assistant
        </h2>
        <p className='hero-container__subtext'>
          Please enter the keyword you want to search for
        </p>
      </div>
      <SearchForm location='hero' />
    </div>
  )
}
