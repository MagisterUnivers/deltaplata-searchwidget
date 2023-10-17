import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  MockFilterOptions,
  mockMetaTags,
  mockSortOptions,
  mockSpecialFilterTags
} from 'helpers'
import { PersonCard, Bulk, Filter, HashViewComponent, NotFound } from 'components'
import { ReactComponent as GridSVG } from '../../assets/svg/grid-layer.svg'
import { ReactComponent as FlexSVG } from '../../assets/svg/flex-layer.svg'
import '../../components/Container/Container.style.scss'
import '../WelcomePage/WelcomePage.style.scss'
import '../../components/Section/Section.style.scss'
import './SearchPage.style.scss'

export function SearchPage () {
  const [cardStyle, SetCardStyle] = useState('grid')
  const { searchquery } = useParams()
  const paramsArray = searchquery.split('&')
  const params = {}

  for (const param of paramsArray) {
    const [key, value] = param.split('=')
    params[key] = value
  }

  const value = params.q
  const filter = params.filter
  const country = params.country
  console.log(country)
  console.log(filter)
  console.log(value)

  const searchQueryClass = value.length > 28 ? 'quoted-text' : 'title-wrapper__searchquery'

  function switchLayer (type) {
    const newStyleType = type === 'grid' ? 'grid' : 'list'
    SetCardStyle(newStyleType)
  }

  return (
    <section className='section' aria-label='search section'>
      <div className='container no-flex'>
        <div className='title-wrapper push-content'>
          <div className='title-wrapper no-wrap'>
            <h1 className='title-wrapper__results-title'>
              Results for: <span className={searchQueryClass}>{value}</span>
            </h1>
          </div>
          <div className='title-wrapper no-wrap'>
            <Filter type='filter' data={MockFilterOptions} />
            <Filter type='sort' data={mockSortOptions} />
            <div className='title-wrapper__grid-selection'>
              <button
                aria-label='switch layer to flex'
                title='Switch to Grid View'
                disabled={cardStyle === 'grid'}
                className='switchlayer-button__reset-style'
                onClick={() => switchLayer('grid')}
              >
                <FlexSVG
                  width={16}
                  height={16}
                  className={cardStyle === 'grid' ? 'title-wrapper__layer-switch' : 'title-wrapper__layer-switch not-active'}
                />
              </button>
              <button
                aria-label='switch later to grid'
                title='Switch to List View'
                disabled={cardStyle === 'list'}
                className='switchlayer-button__reset-style'
                onClick={() => switchLayer('list')}
              >
                <GridSVG
                  width={16}
                  height={16}
                  className={cardStyle === 'list' ? 'title-wrapper__layer-switch' : 'title-wrapper__layer-switch not-active'}
                />
              </button>
            </div>
          </div>
        </div>
        <div className='search-content__wrapper' style={value === 'test' ? { gap: '0px' } : {}}>
          <div className='widgets-wrapper'>
            <Bulk />
            <HashViewComponent type='recentviewed' data={mockMetaTags} />
            <HashViewComponent type='lastvisited' data={mockMetaTags} />
          </div>
          <div className='search-list__wrapper' style={value === 'test' ? { margin: '0 auto' } : {}}>
            {value === 'test'
              ? (
                <NotFound />
                )
              : (
                <ul className='search-list'>
                  {mockSpecialFilterTags.slice(0, 9).map((index) => <PersonCard key={index} layer={cardStyle} />)}
                </ul>
                )}
          </div>
        </div>
      </div>
    </section>
  )
}
