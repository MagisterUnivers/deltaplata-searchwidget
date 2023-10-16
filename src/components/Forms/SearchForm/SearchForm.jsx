import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { ReactComponent as SearchLoop } from '../../../assets/svg/search.svg'
import '../../Header/Header.style.scss'

export function SearchForm ({ location }) {
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
    location === 'hero'
      ? (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
        >
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
            <button type='submit' className='button-primary'>
              Search
            </button>
          </div>
        </form>
        )
      : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
        >
          <label className='navbar-search'>
            <div className='search-button'>
              <SearchLoop width={14} height={14} className='search-svg' />
            </div>
            <input
              type='text'
              name='search'
              className='navbar-search__field'
              placeholder='Please type your keyword'
              value={inputData.search}
              onChange={handleChange}
            />
          </label>
        </form>
        )
  )
}
