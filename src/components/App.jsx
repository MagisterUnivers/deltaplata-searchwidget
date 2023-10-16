import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation
} from 'react-router'
import { useEffect } from 'react'
import { PublicRoute, Layout } from 'components'
import { WelcomePage } from '../pages/WelcomePage/WelcomePage'
import { SearchHistoryPage } from '../pages/SearchHistoryPage/SearchHistoryPage'
import { SearchPage } from '../pages/SearchPage/SearchPage'
import { SavedResultsPage } from '../pages/SavedResultsPage/SavedResultsPage'
import '../index.css'

export function App () {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
  	if (
  		location.pathname === '/'
  	) {
  		navigate('/home')
  	}
  }, [navigate, location])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            path='home'
            index
            element={
              <PublicRoute>
                <WelcomePage />
              </PublicRoute>
						}
          />
          <Route
            path='history'
            element={
              <PublicRoute>
                <SearchHistoryPage />
              </PublicRoute>
						}
          />
          <Route
            path='saved-results'
            element={
              <PublicRoute>
                <SavedResultsPage />
              </PublicRoute>
						}
          />
          <Route path='search/:searchquery' element={<SearchPage />} />
        </Route>
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </>
  )
}
