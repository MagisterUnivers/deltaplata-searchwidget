import { Select } from 'components'
import './Filter.style.scss'

export function Filter ({ type, data, onChange, value }) {
  return (
    <div className='filter-container'>
      <p className='filter-subtext'>
        {type === 'filter' ? 'Filter by' : 'Sort by'}
      </p>
      <Select type={type} data={data} onChange={onChange} value={value} />
    </div>
  )
}
