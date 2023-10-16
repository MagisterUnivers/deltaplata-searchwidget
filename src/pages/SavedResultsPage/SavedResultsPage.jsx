import { useEffect, useState } from 'react'
import { Button, DateFilter, PersonCard, Title } from 'components'
import { mockSearchHistory } from 'constants'
import '../../components/Section/Section.style.scss'
import '../WelcomePage/WelcomePage.style.scss'
import './SavedResultsPage.style.scss'

export function SavedResultsPage ({ search }) {
  const [elementCount, setElementCount] = useState(0)

  useEffect(() => {
    setElementCount(mockSearchHistory.slice(0, 8).length)
  }, [])

  return (
    <section className='section' aria-label='search history section'>
      <div className='container no-flex'>
        <div className='hero-title__container push-content'>
          <Title text='Saved results' quantity={elementCount} />
          <DateFilter />
          <Button text='Clear all bookmarks' ariaLabel='button for cleaning bookmarks' className='btn font-size' type='trash' />
        </div>
        <div className='horizontal-line push-content' />
        <div className='content-container'>
          {mockSearchHistory.slice(0, 8).map(() => {
            return <PersonCard isBookmarked={Boolean(true)} />
          })}
        </div>
      </div>
    </section>
  )
}
