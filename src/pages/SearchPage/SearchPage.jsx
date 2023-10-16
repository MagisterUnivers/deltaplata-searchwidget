import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  MockFilterOptions,
  mockMetaTags,
  mockSortOptions,
  mockSpecialFilterTags
} from 'constants'
import { PersonCard, Bulk, Filter, HashViewComponent } from 'components'
import { ReactComponent as GridSVG } from '../../assets/svg/grid-layer.svg'
import { ReactComponent as FlexSVG } from '../../assets/svg/flex-layer.svg'
import '../../components/Container/Container.style.scss'
import '../WelcomePage/WelcomePage.style.scss'
import '../../components/Section/Section.style.scss'
import './SearchPage.style.scss'

export function SearchPage () {
  const [cardStyle, SetCardStyle] = useState('flex')
  const { searchquery } = useParams()
  const searchQueryClass =
  searchquery.length > 28 ? 'quoted-text' : 'title-wrapper__searchquery'
  console.log(searchquery)

  function switchLayer (type) {
    const newStyleType = type === 'flex' ? 'flex' : 'grid'
    SetCardStyle(newStyleType)
  }

  return (
    <section className='section' aria-label='search section'>
      <div className='container no-flex'>
        <div className='title-wrapper push-content'>
          <div className='title-wrapper no-wrap'>
            <h1 className='title-wrapper__results-title'>
              Results for: <span className={searchQueryClass}>{searchquery}</span>
            </h1>
          </div>
          <div className='title-wrapper no-wrap'>
            <Filter type='filter' data={MockFilterOptions} />
            <Filter type='sort' data={mockSortOptions} />
          </div>
          <div className='title-wrapper__grid-selection'>
            <button
              aria-label='switch layer to flex'
              title='Switch to Flex View'
              disabled={cardStyle === 'flex'}
              className='switchlayer-button__reset-style'
              onClick={() => switchLayer('flex')}
            >
              <FlexSVG
                width={16}
                height={16}
                className={cardStyle === 'flex' ? 'title-wrapper__layer-switch' : 'title-wrapper__layer-switch not-active'}
              />
            </button>
            <button
              aria-label='switch later to grid'
              title='Switch to Grid View'
              disabled={cardStyle === 'grid'}
              className='switchlayer-button__reset-style'
              onClick={() => switchLayer('grid')}
            >
              <GridSVG
                width={16}
                height={16}
                className={cardStyle === 'grid' ? 'title-wrapper__layer-switch' : 'title-wrapper__layer-switch not-active'}
              />
            </button>
          </div>
        </div>
        <div className='search-content__wrapper'>
          <div className='widgets-wrapper'>
            <Bulk />
            <HashViewComponent type='recentviewed' data={mockMetaTags} />
            <HashViewComponent type='lastvisited' data={mockMetaTags} />
          </div>
          <div className='search-list__wrapper'>
            <ul className='search-list'>
              {mockSpecialFilterTags.slice(0, 9).map((index) => {
                return (
                  <React.Fragment key={index}>
                    <PersonCard layer={cardStyle} />
                  </React.Fragment>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
