import {
  mockSortOptions,
  MockFilterOptions,
  mockMetaTags
} from 'constants'
import { SpecialFilter, Title, Hero, Bulk, HashViewComponent, Filter } from 'components'
import '../../components/Container/Container.style.scss'
import './WelcomePage.style.scss'
import '../../components/Section/Section.style.scss'

export function WelcomePage () {
  return (
    <section className='section' aria-label='welcome section'>
      <div className='container no-flex'>
        <div className='title-wrapper push-content'>
          <div className='title-wrapper no-wrap'>
            <Title text='Welcome' />
          </div>
          <div className='title-wrapper no-wrap place-to__end'>
            <Filter type='filter' data={MockFilterOptions} />
            <Filter type='sort' data={mockSortOptions} />
          </div>
        </div>
        <div className='hero-wrapper'>
          <SpecialFilter />
          <Hero />
          <div className='widgets-wrapper'>
            <Bulk />
            <HashViewComponent type='recentviewed' data={mockMetaTags} />
            <HashViewComponent type='lastvisited' data={mockMetaTags} />
          </div>
        </div>
      </div>
    </section>
  )
}
