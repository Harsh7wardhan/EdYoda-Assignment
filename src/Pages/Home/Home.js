import React from 'react'
import './Home.css'
import { Benefits } from '../../Components/Benefits/Benefits'
import { Pricing } from '../../Components/Pricing/Pricing'
export const Home = () => {
  return (

    <div className='home-container'>
      <div>
        <Benefits />
      </div>
      <div>
        <Pricing />
      </div>
    </div>
  )
}
