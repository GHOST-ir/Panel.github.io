import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import TopBar from './Components/topBar/TopBar'
import SideBar from './Components/sideBar/SideBar'
import './App.css'

export default function App() {

  let router = useRoutes(routes)

  return (

    <>
      <TopBar />
      <div className="container">
        <SideBar />
        {router}
      </div>
    </>

  )
}
