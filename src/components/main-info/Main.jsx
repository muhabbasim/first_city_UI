import React from 'react'
import './Main-info.scss'
import { RiUser3Line } from 'react-icons/ri'

import data from '../../data'
import Location from '../location/Location'


export default function Main() {
  const locations = data.data

  return (
    <div className='main-info'>
      <div className="date">
        <div className="the-day">
          <h2 className="month">ذو الحجة</h2>
          <h4 className="hours">07:38 - 07:33</h4>
        </div>
        <h1 className="day">11</h1>
      </div>
      <div className="locations">
        {locations.map(location => <Location key={location.id} location = {location} /> )}
      </div>
      <div className="quantity">
        <div className="stats">
          <h4>عدد الحجاج</h4>
          <h1>58,571</h1>
        </div>
        <div className="icon">
          <RiUser3Line />
        </div>
      </div>
    </div>
  )
}
