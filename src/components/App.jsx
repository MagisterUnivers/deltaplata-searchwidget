import {
  Route,
  Routes,
  Navigate
} from 'react-router'
import { Layout } from 'components'
import { WelcomePage } from '../pages/WelcomePage/WelcomePage'
import { SearchHistoryPage } from '../pages/SearchHistoryPage/SearchHistoryPage'
import { SearchPage } from '../pages/SearchPage/SearchPage'
import { SavedResultsPage } from '../pages/SavedResultsPage/SavedResultsPage'
import '../index.css'

export function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={<WelcomePage />}
          />
          <Route
            path='history'
            element={<SearchHistoryPage />}
          />
          <Route
            path='bookmarks'
            element={<SavedResultsPage />}
          />
          <Route path='search/:searchquery' element={<SearchPage />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}
