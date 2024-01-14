import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../Pages/Footer/Footer'

const MainPage = () => {
  return (
    <div>
        <Navbar />
        <ScrollRestoration />
          <Outlet />
        <Footer />
    </div>
  )
}

export default MainPage