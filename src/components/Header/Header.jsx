import React, { useState } from 'react'
import { ReactComponent as SearchLoop } from '../../assets/svg/search.svg'
import { ReactComponent as NextSvg } from '../../assets/svg/arrow-right-rendered.svg'
import '../Container/Container.style.scss'
import './Header.style.scss'

const Header = () => {
  const [inputData, setInputData] = useState({
    search: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }

  const handleSend = () => {
    // navigate to
  }

  return (
    <>
      <nav className='container'>
        <div className='navbar-search'>
          <button className='search-button'>
            <SearchLoop width={14} height={14} className='search-svg' />
          </button>
          <input
            type='text'
            name='search'
            className='navbar-search__field'
            placeholder='Please type your keyword'
            value={inputData.search}
            onChange={handleChange}
          />
        </div>
        <div className='navbar-search'>
          <h2 className='navbar-search__title'>Looking for more details?</h2>
          <button
            type='button'
            className='navbar-search__button'
            onClick={handleSend}
          >
            Advanced Search <NextSvg width={16} height={16} />
          </button>
        </div>
      </nav>
    </>
  )
}

export default Header
