import { useState } from 'react'
import {
  mockSortOptions,
  MockFilterOptions,
  mockMetaTags
} from 'helpers'
import { SpecialFilter, Title, Hero, Bulk, HashViewComponent, Filter } from 'components'
import '../../components/Container/Container.style.scss'
import './WelcomePage.style.scss'
import '../../components/Section/Section.style.scss'

export function WelcomePage () {
  const [filterOptions, setFilterOptions] = useState('')
  const [sortOptions, setSortOptions] = useState('')
  const [countryOptions, setCountryOptions] = useState('')
  const [specialFilterOptions, setSpecialFilterOptions] = useState({})

  function handleChangeFilterState (event) {
    const selectedValue = event.target.value
    setFilterOptions(selectedValue)
  }
  function handleChangeSortState (event) {
    const selectedValue = event.target.value
    setSortOptions(selectedValue)
  }
  function handleChangeCountryState (event) {
    const selectedValue = event.target.value
    setCountryOptions(selectedValue)
  }
  function handleChangeSpecialState (data) {
    const filteredKeys = Object.keys(data).filter(key => key.startsWith('checkbox-'))
    const filteredItems = {}
    filteredKeys.forEach(key => {
      filteredItems[key.replace('checkbox-', '')] = data[key]
    })
    setSpecialFilterOptions(filteredItems)
  }

  return (
    <section className='section' aria-label='welcome section'>
      <div className='container no-flex'>
        <div className='title-wrapper push-content'>
          <div className='title-wrapper no-wrap'>
            <Title text='Welcome' />
          </div>
          <div className='title-wrapper no-wrap place-to__end'>
            <Filter type='filter' data={MockFilterOptions} onChange={handleChangeFilterState} value={filterOptions} />
            <Filter type='sort' data={mockSortOptions} onChange={handleChangeSortState} value={sortOptions} />
          </div>
        </div>
        <div className='hero-wrapper'>
          <SpecialFilter onCountryChange={handleChangeCountryState} countryValue={countryOptions} onChange={handleChangeSpecialState} />
          <Hero filterValue={filterOptions} sortValue={sortOptions} countryValue={countryOptions} specialValue={specialFilterOptions} />
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
