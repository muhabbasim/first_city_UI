import React from 'react'
import './FojjTime.scss'

export default function FojjTime({fojjStats}) {
  const { fojjName, exit, arrival } = fojjStats

  return (
    <table>
      <tbody>
        <td>{arrival}</td>
        <td>{exit}</td>
        <td>{fojjName}</td>
      </tbody>
    </table>
  )
}
