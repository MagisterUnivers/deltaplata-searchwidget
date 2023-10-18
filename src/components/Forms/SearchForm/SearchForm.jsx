import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ReactComponent as SearchLoop } from '../../../assets/svg/search.svg'
import '../../Header/Header.style.scss'

export function SearchForm ({ location, filterValue, sortValue, countryValue, specialValue }) {
  const navigate = useNavigate()

  const [inputData, setInputData] = useState({
    search: ''
  })

  function handleChange (e) {
    const { name, value } = e.target
    const trimmedValue = value.trim()
    setInputData({ ...inputData, [name]: trimmedValue })
  }

  function handleSend () {
    const specialKeys = Object.keys(specialValue)
    const keysString = specialKeys.join(', ')

    const queryParams = new URLSearchParams({
      searchquery: inputData.search,
      filter: filterValue,
      sort: sortValue,
      specialFilter: keysString,
      country: countryValue
    })

    const queryString = queryParams.toString()
    const url = `/search/${queryString}`

    navigate(url)
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
            <label className='hero-search'>
              <input
                type='text'
                name='search'
                className='hero-container__field'
                placeholder='Keyword'
                value={inputData.search}
                onChange={handleChange}
              />
            </label>
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
