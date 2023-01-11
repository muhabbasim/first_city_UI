import React from 'react'
import './Home.scss'
import Navbar from '../../components/navbar/Navbar'
import Details from '../../components/Details-info/Details'
import Main from '../../components/main-info/Main'

export default function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="container">
        <div className="details">
          <Details />
        </div>
        <div className="main-info">
          <Main />
        </div>
      </div>
    </div>
  )
}
