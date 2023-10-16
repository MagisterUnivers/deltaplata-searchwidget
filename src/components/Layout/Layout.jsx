import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import '../Header/Header.style.scss'

export function Layout () {
  return (
    <>
      <header className='header-bg'>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer />
    </>
  )
}
