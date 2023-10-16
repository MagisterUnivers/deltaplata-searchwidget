import { Select } from '../Select/Select'
import './Filter.style.scss'

export const Filter = ({ type, data }) => {
  return (
    <div className='filter-container'>
      <p className='filter-subtext'>
        {type === 'filter' ? 'Filter by' : 'Sort by'}
      </p>
      <Select type={type} data={data} />
    </div>
  )
}
