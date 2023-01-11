import React, { useRef, useState } from 'react'
import './Location.scss'

export default function Location({ location }) {
  
  const { name, percentage } = location
  const [ style, setStyle ] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width:`${percentage}`
    }
    setStyle(newStyle)
  }, 500);

  return (
    <div className='location'>

      <div className="stats">
        <span className="progress-text">{percentage}</span>
        <div className="progress">
          <div className="progress-fill" style={style}></div>
        </div>
      </div>
      <span>{name}</span>
    </div>
  )
}
