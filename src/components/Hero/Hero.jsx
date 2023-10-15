import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import robothiImage from '../../assets/image/robothi.png'
import robothi2xImage from '../../assets/image/robothi@2x.png'
import './Hero.style.scss'

export const Hero = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({
    search: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
    setSearchParams({ name: e.target.value })
    console.log(searchParams.get('name')) // 'examplestring'
  }

  const handleSend = () => {
    navigate(`/search/${inputData.search}`)
  }

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
      <div className='hero-searchbar__wrapper'>
        <div className='hero-search'>
          <input
            type='text'
            name='search'
            className='hero-container__field'
            placeholder='Keyword'
            value={inputData.search}
            onChange={handleChange}
          />
        </div>
        <button
          type='submit'
          className='button-primary'
          onClick={() => {
					  handleSend()
          }}
        >
          Search
        </button>
      </div>
    </div>
  )
}
