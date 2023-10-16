import { Button, DateFilter, SearchHistoryTable, Title } from 'components'
import '../../components/Section/Section.style.scss'
import './SearchHistoryPage.style.scss'
import '../WelcomePage/WelcomePage.style.scss'

export function SearchHistoryPage () {
  return (
    <section className='section' aria-label='search history section'>
      <div className='container no-flex'>
        <div className='hero-title__container push-content'>
          <Title text='History' />
          <DateFilter />
          <Button text='Clear all history' ariaLabel='button for cleaning bookmarks' className='btn' type='trash' />
        </div>
        <div className='horizontal-line push-content' />
        <div className='table-flex'>
          <SearchHistoryTable tableDate='25 July, 2023' date='2023-07-25' />
          <SearchHistoryTable tableDate='24 July, 2023' date='2023-07-24' />
        </div>
      </div>
    </section>
  )
}
