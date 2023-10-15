import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { Filter } from '../../components/Filter/Filter'
import {
  MockFilterOptions,
  mockMetaTags,
  mockSortOptions
} from '../../constants/mockData'
import { Bulk } from '../../components/Bulk/Bulk'
import PersonCard from '../../components/PersonCard/PersonCard'
import { HashViewComponent } from '../../components/HashViewComponent/HashViewComponent'
import { ReactComponent as GridSVG } from '../../assets/svg/grid-layer.svg'
import { ReactComponent as FlexSVG } from '../../assets/svg/flex-layer.svg'
import '../../components/Container/Container.style.scss'
import '../WelcomePage/WelcomePage.style.scss'
import '../../components/Section/Section.style.scss'
import './SearchPage.style.scss'

const SearchPage = () => {
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
              Results for:
              <span className={searchQueryClass}>{searchquery}</span>
            </h1>
          </div>
          <div className='title-wrapper__grid-selection'>
            <FlexSVG
              width={16}
              height={16}
              aria-label='switch layer to flex'
              title='Switch to Flex View'
              className='title-wrapper__layer-switch'
              onClick={() => switchLayer('flex')}
            />
            <GridSVG
              width={16}
              height={16}
              aria-label='switch later to grid'
              title='Switch to Grid View'
              className='title-wrapper__layer-switch'
              onClick={() => switchLayer('grid')}
            />
          </div>
          <div className='title-wrapper no-wrap place-to__end'>
            <Filter type='filter' data={MockFilterOptions} />
            <Filter type='sort' data={mockSortOptions} />
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
              <PersonCard style={cardStyle} />
              <PersonCard style={cardStyle} />
              {/* {/* <PersonCard style={cardStyle} /> */}
              {/* <PersonCard style={cardStyle} />
							<PersonCard style={cardStyle} />
							<PersonCard style={cardStyle} />
							<PersonCard style={cardStyle} />
							<PersonCard style={cardStyle} />
							<PersonCard style={cardStyle} />  */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchPage
