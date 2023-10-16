import { useState } from 'react'
import '../Filter/Filter.style.scss'
import './DateFilter.style.scss'

export function DateFilter () {
  const [dataValueFrom, setDataValueFrom] = useState('2023-07-24')
  const [dataValueTo, setDataValueTo] = useState('2023-08-30')

  function handleDateChange (e, inputId) {
    const { value } = e.target
    if (inputId === 'from') {
      setDataValueFrom(value)
    } else if (inputId === 'to') {
      setDataValueTo(value)
    }
  }

  return (
    <div className='datefilter-wrapper'>
      <p className='datefilter-subtext filter-subtext'>Sort from</p>
      <div className='datefilter-input__wrapper'>
        <input
          type='date'
          className='datefilter-input'
          value={dataValueFrom}
          onChange={(event) => {
            handleDateChange(event, 'from')
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
            handleDateChange(event, 'to')
          }}
        />
      </div>
    </div>
  )
}
