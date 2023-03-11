import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Mobile from './Mobile'
import Navbar from './Navbar'

const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/mobile" element={<Mobile/>}/>
      </Routes>
        <Header/>
        <Navbar/>
    </div>
  )
}

export default index