import React, { useState } from 'react'
import Topbar from './Components/Topbar/Topbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Navbottom from './Components/Navbottom/Navbottom'
import Navbar from './Components/Navbar/Navbar'

export default function App() {
  const [Routelist, setRoutelist] = useState([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/shop",
      element: <Shop />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
  ])

  const Location = useLocation();

  return (
    <div>
      <Topbar />
      <Navbar />
      
      {/* --------- under Navbar-------- */}
      {(location.pathname === '/' || location.pathname === '/shop') && (
        <Navbottom />
      )}
      {/* -------   website routers   ------- */}

      <Routes>
        {Routelist.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>



    </div>
  )
}
