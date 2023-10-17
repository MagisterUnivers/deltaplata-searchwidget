import { useNavigate } from 'react-router-dom'
import { ReactComponent as Hash } from '../../assets/svg/hash.svg'
import './HashView.style.scss'

export function HashViewComponent ({ type, data }) {
  const navigate = useNavigate()

  return (
    <div className='recentsearch-container'>
      <h2 className='recentsearch-title'>
        {type === 'recentviewed' ? 'Recent Searches' : 'Last Data Viewed'}
      </h2>
      <ul className='recentsearch-subtext__list'>
        {data.map((e) => {
          return (
            <li key={e} className='recentsearch-list__item' onClick={() => navigate('/')}>
              <a
                href='/' aria-label='link to tag view' style={{ display: 'flex', alignItems: 'center' }}
                onClick={(event) => {
                  event.preventDefault()
                  navigate('/')
                }}
              >
                <Hash width={16} height={16} className='recentsearch-list__icon' />{' '}
                <p className='recentsearch-subtitle'>{e}</p>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
