import { useState } from 'react'
import {
  mockSpecialFilterTags
} from 'helpers'
import { CountryFilter } from 'components'
import { ReactComponent as Close } from '../../assets/svg/close.svg'
import './SpecialFilter.style.scss'

export function SpecialFilter ({ onCountryChange, countryValue, onChange }) {
  const [checkedItems, setCheckedItems] = useState({})

  function handleCheckboxChange (e) {
    const { id, checked } = e.target

    setCheckedItems(prevCheckedItems => {
      const updatedCheckedItems = {
        ...prevCheckedItems,
        [id]: checked
      }

      onChange(updatedCheckedItems)

      return updatedCheckedItems
    })
  }

  const numberOfChecked = Object.values(checkedItems).filter(Boolean).length

  function resetCheckboxes () {
    const checkboxes = document.querySelectorAll('.special-filter__checkbox-item')
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false
    })
  }

  function handleRemoveAllFilter () {
    setCheckedItems({})
    resetCheckboxes()
  }

  return (
    <div className='special-filter__container'>
      <div className='special-filter__title-container'>
        <h3 className='special-filter__title'>Special Filter</h3>
        <span className='special-filter__title-amount__border'><p className='special-filter__title-amount'>{numberOfChecked}</p></span>
      </div>
      <div className='special-filter__checkbox-wrapper'>
        <ul className='special-filter__list'>
          {mockSpecialFilterTags.map((elem) => {
            const id = `checkbox-${elem}`

            return (
              <li key={elem}>
                <label className='special-filter__item'>
                  <input
                    className='special-filter__checkbox-item'
                    type='checkbox'
                    id={id}
                    defaultChecked={false}
                    onChange={(event) => handleCheckboxChange(event)}
                  />
                  <p
                    className='special-filter__checkbox-subtext'
                  >{elem}
                  </p>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
      <button
        type='button'
        className='special-filter__button'
        onClick={() => handleRemoveAllFilter()}
      >
        <Close width={16} height={16} className='special-filter__icon' />
        Remove all filter
      </button>
      <CountryFilter onChange={onCountryChange} value={countryValue} />
    </div>
  )
}
