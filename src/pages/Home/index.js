import React from 'react'
import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <div className="home-page">
        <Outlet />
    </div>
  )
}

export default Home