import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='min-h-screen'>
        <Outlet />
      </main>
    </div>
  )
}

export default App