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
import '../../components/SpecialFilter/SpecialFilter.style.scss'

export function SearchPage () {
  const [cardStyle, SetCardStyle] = useState('grid')
  const { searchquery } = useParams()
  const paramsArray = searchquery.split('&')
  const params = {}

  for (const param of paramsArray) {
    const [key, value] = param.split('=')
    params[key] = value
  }

  const value = params.searchquery

  function switchLayer (type) {
    const newStyleType = type === 'grid' ? 'grid' : 'list'
    SetCardStyle(newStyleType)
  }

  return (
    <section className='section' aria-label='search section'>
      <div className='container no-flex'>
        <div className='title-wrapper push-content'>
          <div className='title-wrapper no-wrap' style={{ justifyContent: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <h1 className='title-wrapper__results-title'>
                Results for:
              </h1>
              <span className='title-wrapper__searchquery'>{value}</span>
              <span className='special-filter__title-amount__border'><p className='special-filter__title-amount'>1</p></span>
            </div>
          </div>
          <div className='title-wrapper no-wrap' style={{ justifyContent: 'flex-end' }}>
            <Filter type='filter' data={MockFilterOptions} />
            <Filter type='sort' data={mockSortOptions} />
            <div className='title-wrapper__grid-selection'>
              <button
                aria-label='Switch to Grid View'
                title='Switch to Grid View'
                disabled={cardStyle === 'grid'}
                className={cardStyle === 'grid' ? 'title-wrapper__layer-switch switchlayer-button__reset-style' : 'title-wrapper__layer-switch not-active switchlayer-button__reset-style'}
                onClick={() => switchLayer('grid')}
              >
                <FlexSVG
                  width={16}
                  height={16}
                  title='Switch to Grid View'
                />
              </button>
              <button
                aria-label='Switch to List View'
                title='Switch to List View'
                disabled={cardStyle === 'list'}
                className={cardStyle === 'list' ? 'title-wrapper__layer-switch switchlayer-button__reset-style' : 'title-wrapper__layer-switch not-active switchlayer-button__reset-style'}
                onClick={() => switchLayer('list')}
              >
                <GridSVG
                  width={16}
                  height={16}
                  title='Switch to List View'
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
