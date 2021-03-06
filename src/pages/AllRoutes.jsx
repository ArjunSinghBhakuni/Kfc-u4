import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Menu } from '@chakra-ui/react';
import Deal from './Deal';
import Cart from './Cart';
import Account from './Account';
import Login from './Login';
import { AuthContext } from '../context/AuthConext';
const AllRoutes = () => {
 const [isAuth,dispatch] = useContext(AuthContext)
 return (
    <div>
     
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/deals' element={<Deal/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/account' element={isAuth ? <Account/> :<Login/>}/>

     </Routes>
     <Footer/>
     
    </div>
  )
}

export default AllRoutes