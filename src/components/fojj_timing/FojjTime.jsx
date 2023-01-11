import React from 'react'
import './FojjTime.scss'

export default function FojjTime({fojjStats}) {
  const { fojjName, exit, arrival } = fojjStats

  return (
    <table>
      <tbody>
        <td className='row'>{arrival}</td>
        <td className='row'>{exit}</td>
        <td className='row'>{fojjName}</td>
      </tbody>
    </table>
  )
}
