import { Link, useNavigate } from 'react-router-dom'
import { tableCellsName, mockSearchHistory } from 'constants'
import { ReactComponent as ArrowRight } from '../../../assets/svg/arrow-right.svg'
import './SearchhistoryTable.style.scss'

export function SearchHistoryTable ({ tableDate, date }) {
  const navigate = useNavigate()

  console.log(tableCellsName)
  console.log(mockSearchHistory)

  console.log(tableDate)
  console.log(date)

  return (
    <div className='table'>
      <h2 className='table-date'>{tableDate}</h2>
      <table className='table-base'>
        <thead className='table-head'>
          <tr>
            {tableCellsName?.map((category) => {
              return <th key={category}>{category}</th>
            })}
          </tr>
        </thead>
        <tbody className='table-body'>
          {mockSearchHistory
            .filter((item) => item.date === date)
            .map((item) => (
              <tr key={item.number}>
                <td>
                  <Link to='/home' className='table-subtext'>{item.name.length > 21 ? item.name.slice(0, 21) + '...' : item.name}</Link>
                </td>
                <td className='table-subtext'>{item.type}</td>
                <td className='table-subtext'>{item.number}</td>
                <td className='table-subtext'>{item.time}</td>
                <td
                  className='table-link__item link-pointer'
                  onClick={() => navigate('/home')}
                >
                  <p className='table-subtext__link'>Search again</p>
                  <ArrowRight width={16} height={16} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
