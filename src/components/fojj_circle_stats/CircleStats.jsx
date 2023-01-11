import React from 'react'
import './CircleStats.scss'

export default function circleStats({item}) {
  
  return (

    <div className="fojj-circle-stats">
      <div className="stats">
        <div className="circle">
          <div className="stats-number">
            <h5>{item.number}</h5>
            <div>
              <h6>فوج</h6>
              <h6>{item.fojjQuantity}</h6>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <circle style={item.circleColor} cx="80" cy="80" r="33" stroke-linecap="round" />
          </svg>
        </div>
        <span>{item.title}</span>
      </div>
    </div>
  )
}
