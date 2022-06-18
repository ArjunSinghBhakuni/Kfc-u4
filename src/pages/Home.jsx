import React from 'react'

import Location from '../components/Location';
import HomeSliding from '../components/HomeSliding';
import Welcome from '../components/Welcome';
import {SimpleSidebar} from'./SimpleSidebar'
const Home = () => {
  return (
    <div>
  <SimpleSidebar/>
    <Location/>
    <HomeSliding/>
    <Welcome/>
 

    </div>
  )
}

export default Home