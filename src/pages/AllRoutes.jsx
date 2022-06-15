import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
const AllRoutes = () => {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     <Footer/>
     
    </div>
  )
}

export default AllRoutes