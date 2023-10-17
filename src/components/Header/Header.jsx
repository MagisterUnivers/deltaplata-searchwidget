import { useNavigate } from 'react-router-dom'
import { Button, SearchForm } from 'components'
import '../Container/Container.style.scss'
import './Header.style.scss'

export function Header () {
  const navigate = useNavigate()

  function handleSend () {
    navigate('/')
  }

  return (
    <>
      <nav className='container'>
        <SearchForm location='header' />
        <div className='navbar-search'>
          <h2 className='navbar-search__title'>Looking for more details?</h2>
          <Button type='advancedSearch' text='Advanced Search' ariaLabel='button for advanced searching' className='btn-search padding-8-12' handleSend={handleSend} />
        </div>
      </nav>
    </>
  )
}
