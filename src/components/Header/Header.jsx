import SearchForm from '../Forms/SearchForm/SearchForm'
import { ReactComponent as NextSvg } from '../../assets/svg/arrow-right-rendered.svg'
import '../Container/Container.style.scss'
import './Header.style.scss'

export const Header = () => {
  function handleSend () {
    // navigate to
  }

  return (
    <>
      <nav className='container'>
        <SearchForm location='header' />
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
