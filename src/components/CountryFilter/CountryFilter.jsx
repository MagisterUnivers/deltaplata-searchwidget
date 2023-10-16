import { mockCountryFilter } from '../../constants/mockData'
import { Select } from '../Select/Select'
import '../SpecialFilter/SpecialFilter.style.scss'
import './CountryFilter.style.scss'

export const CountryFilter = () => {
  return (
    <div className='special-filter__country-filter'>
      <h3 className='country-filter__title special-filter__title'>Country Filter</h3>
      <Select type='country' data={mockCountryFilter} />
    </div>
  )
}
