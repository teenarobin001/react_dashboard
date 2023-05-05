import React from 'react' 
import './style.css' 


import FeaturedInfo from './Feature/FeaturedInfo'
import Charts from '../Charts/Charts'
import {userData} from '../../dummyData' 

const Home = () => {
  return (
    <div className=''> 
       
        <FeaturedInfo />
        
        <Charts  data={userData} title="User Analytics" grid dataKey="Active User" />  
         
    </div>
  )
}

export default Home
