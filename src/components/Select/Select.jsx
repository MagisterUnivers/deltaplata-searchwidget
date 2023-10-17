import React from 'react'
import './Select.style.scss'

export function Select ({ type, data }) {
  let text

  switch (type) {
    case 'filter':
      text = 'Type'
      break
    case 'sort':
      text = 'Lasted Updated'
      break
    case 'country':
      text = 'Netherlands'
      break
    default:
		  text = 'Type'
  }

  return (
    <select className='filter-select__menu'>
      <option value='default'>
        {text}
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
