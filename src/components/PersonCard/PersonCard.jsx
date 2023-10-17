import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { mockSearchHistory } from 'constants'
import { CustomAlert } from 'components'
import { ReactComponent as ShareSVG } from '../../assets/svg/share.svg'
import { ReactComponent as BookmarkSVG } from '../../assets/svg/bookmark.svg'
import { ReactComponent as ArrowRightSVG } from '../../assets/svg/arrow-right-rendered.svg'
import { ReactComponent as CalendarSVG } from '../../assets/svg/calendar.svg'
import { ReactComponent as MapSVG } from '../../assets/svg/map-pin-new.svg'
import { ReactComponent as GlobeSVG } from '../../assets/svg/globe.svg'
import britainFlag from '../../assets/image/britain-flag.png'
import '../Filter/Filter.style.scss'
import './PersonCard.style.scss'

export function PersonCard ({ layer, isBookmarked }) {
  const [showAlert, setShowAlert] = useState(false)
  const [alertTimer, setAlertTimer] = useState(null)
  const [messageAlert, setMessageAlert] = useState('')

  if (!layer) layer = 'grid'
  console.log(isBookmarked)

  async function handleShareClick () {
    const randomText = 'https://www.demowidget.com/search/somelement1/'

    await navigator.clipboard.writeText(randomText)
    displayAlert('Link added to your clipboard: ' + randomText)
  }

  function displayAlert (message) {
    setMessageAlert(message)
    setShowAlert(true)

    if (alertTimer) {
      clearTimeout(alertTimer)
    }

    const timer = setTimeout(() => {
      setShowAlert(false)
    }, 3000)

    setAlertTimer(timer)
  }

  useEffect(() => {
    return () => {
      if (alertTimer) {
        clearTimeout(alertTimer)
      }
    }
  }, [])

  function handleBookmarkClick (type) {
    if (type === true) {
      displayAlert('Removed from Bookmarks')
    }
    if (type === false) {
      displayAlert('Added to Bookmarks')
    }
  }

  return (
    <li
      className={layer === 'grid' ? 'search-list__item' : 'main-wrapper'}
    >
      <div className='search-list__item-header'>
        <div className='search-list__item-subtitle-wrapper'>
          <p className='search-list__item-subtitle'>30 May, 2023</p>
        </div>
        <div className='search-item__icons'>
          <div className='search-item__icons-wrapper'>
            <ShareSVG
              width={16}
              height={16}
              className='search-item__icon'
              onClick={() => handleShareClick()}
            />
          </div>
          <div className={isBookmarked ? 'search-item__icons-wrapper__reversed' : 'search-item__icons-wrapper'}>
            <BookmarkSVG
              width={16}
              height={16}
              className='search-item__icon'
              onClick={() => isBookmarked ? handleBookmarkClick(true) : handleBookmarkClick(false)}
            />
          </div>
          {showAlert &&
            createPortal(
              <CustomAlert message={messageAlert} className={`custom-alert ${showAlert ? '' : 'hide'}`} />,
              document.querySelector('#root')
            )}
        </div>
      </div>
      <div
        className={layer === 'grid' ? '' : 'search-list__grid-container'}
      >
        <div
          className={layer === 'grid' ? '' : 'search-list__item-body'}
        >
          <div className='search-item__name-wrapper'>
            <p className='search-item__name-subtext filter-subtext'>Person</p>
            <h2 className='search-item__name-title'>Nora Frey Draeger</h2>
          </div>
          <ul className='search-item__tags-list'>
            {mockSearchHistory.map((item) => {
						  if (item.name === 'Nora Frey Draeger') {
						    const tags = item.tags

                if (tags.length > 4) {
						      const remainingTags = tags.slice(4)
                  return (
                    <React.Fragment key={tags}>
                      {tags.slice(0, 4).map((tag, tagIndex) => (
                        <li className='search-item__tags-item' key={tagIndex}>
                          <p className='search-item__tag search-item__name-subtext filter-subtext'>
                            {tag}
                          </p>
                        </li>
                      ))}
                      <li className='search-item__tags-item search-item__tags-item__more'>
                        <p className='search-item__tag search-item__name-subtext filter-subtext'>
                          +{remainingTags.length} More
                        </p>
                      </li>
                    </React.Fragment>
                  )
						    } else {
						      return tags.map((tag, tagIndex) => (
  <li className='search-item__tags-item' key={tagIndex}>
    <p className='search-item__tag search-item__name-subtext filter-subtext'>
      {tag}
    </p>
  </li>
						      ))
                }
						  }
						  return null
            })}
          </ul>
        </div>
        <div
          className={
						layer === 'grid'
						  ? 'search-item__user-info__wrapper'
						  : 'search-item__user-info__wrapper no-margin'
					}
        >
          {mockSearchHistory.map((item, index) => {
					  const { nationality, birthdate, address } = item

            if (item.name === 'Nora Frey Draeger') {
					    return (
  <React.Fragment key={index}>
    <div className='search-item__flex' key={nationality}>
      {nationality === 'British'
        ? (
          <>
            <img
              src={britainFlag}
              alt='british national flag'
              width={16}
              height={16}
            />
            <p className='filter-subtext'>{nationality}</p>
          </>
          )
        : (
          <React.Fragment key={index}>
            <GlobeSVG width={16} height={16} />
            <p className='filter-subtext'>{nationality}</p>
          </React.Fragment>
          )}
    </div>
    <div className='search-item__flex' key={birthdate}>
      <CalendarSVG width={16} height={16} />
      <p className='filter-subtext'>{birthdate}</p>
    </div>
    <div className='search-item__flex' key={address}>
      <MapSVG width={16} height={16} />
      <p className='filter-subtext'>{address}</p>
    </div>
  </React.Fragment>
					    )
					  }
					  return null
          })}
        </div>
        <div
          className={
						layer === 'grid'
						  ? 'search-list__item-footer'
						  : 'search-list__item-footer button-width'
					}
        >
          <button
            type='button'
            aria-label='button to get details about user'
            className='search-list__item-button filter-subtext '
          >
            Details{' '}
            <ArrowRightSVG
              width={16}
              height={16}
              className='search-item__icons'
            />
          </button>
        </div>
      </div>
    </li>
  )
}
