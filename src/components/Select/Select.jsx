import React from 'react'
import './Select.style.scss'

export function Select ({ type, data }) {
  return (
    <select className='filter-select__menu'>
      <option value='default'>
        {(() => {
				  switch (type) {
				    case 'filter':
				      return 'Type'
            case 'sort':
				      return 'Lasted Updated'
            case 'country':
				      return 'Netherlands'
            default:
				      return 'Type'
          }
        })()}
      </option>
      {data?.map((data, index) => {
			  return (
  <React.Fragment key={index}>
    <option value={data}>
      {data}
    </option>
  </React.Fragment>
			  )
      })}
    </select>
  )
}
