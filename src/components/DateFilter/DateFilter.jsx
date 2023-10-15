import { useState } from 'react'
import '../Filter/Filter.style.scss'
import './DateFilter.style.scss'

export const DateFilter = () => {
	const [dataValueFrom, SetDataValueFrom] = useState('2023-07-24'); //eslint-disable-line
	const [dataValueTo, SetDataValueTo] = useState('2023-08-30'); //eslint-disable-line

  const handleDateChange = (e) => {
    const { value } = e.target

    console.log(value)
  }

  // const formatDate = (date, id) => {
  // 	const parts = date.split('-');
  // 	console.log(parts);

  // 	if (id === 'from') return SetDataValueFrom(parts.reverse().join('/'));

  // 	if (id === 'to') {
  // 		const [year, month, day] = parts;
  // 		return SetDataValueTo(`${day}/${month}/${year}`);
  // 	}

  // 	return date;
  // };

  // const handleIconClick = () => {};

  return (
    <div className='datefilter-wrapper'>
      <p className='datefilter-subtext filter-subtext'>Sort from</p>
      <div className='datefilter-input__wrapper'>
        <input
          type='date'
          className='datefilter-input'
          value={dataValueFrom}
          onChange={(event) => {
					  handleDateChange(event)
          }}
        />
      </div>
      <p className='datefilter-subtext filter-subtext'>to</p>
      <div className='datefilter-input__wrapper'>
        <input
          type='date'
          className='datefilter-input'
          value={dataValueTo}
          onChange={(event) => {
					  handleDateChange(event)
          }}
        />
      </div>
    </div>
  )
}
