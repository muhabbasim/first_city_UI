import React from 'react'
import './Fojj.scss'
import {AiOutlineClose} from 'react-icons/ai'
import {TbTriangleInverted} from 'react-icons/tb'
import {FaThumbsUp} from 'react-icons/fa'
import CircleStats from '../fojj_circle_stats/CircleStats'
import data from '../../statsData'
import fojjData from '../../fojjData'
import FojjTime from '../fojj_timing/FojjTime'

export default function Fojj({setFojj}) {

  const stats = data.stats
  const fojjStats = fojjData.fojj

  return (
    <section className='fojj'>
      <div className="fojj-top">
        <div className="fojj-top-left">
          <div className="close-icon">
            <AiOutlineClose onClick={()=> setFojj(false)}/>
          </div>
          <div className="option-icon">
            <div className='option-icon1'>
              <TbTriangleInverted />
            </div>
            <div className='option-icon2'>
              <FaThumbsUp />
            </div>
          </div>
        </div>

        <div className="fojj-top-center">
          {stats.map(item => {
            return <div key={item.id}>
              <CircleStats item={item} />
            </div>
          } )}
        </div>

        <div className="fojj-top-right">
          <div className="location">
            <h6>تفاصيل العملية</h6>
            <h4>منى آلى عرفات</h4>
          </div>
          <div className="calender">
            <span>11</span>
            <span>ذي الحجة</span>
          </div>
          
        </div>
      </div>
      <div className="line"></div>

      <div className="fojj-bottom">
        <div className="arrived-fojj">
          <div>
            <span>افواج وصلت</span>
            <div className="point"></div>
          </div>
          <table>
            <thead className='header'>
              <td>الوصول</td>
              <td>الخروج</td>
              <td>الفوج</td>
            </thead>
            <tbody>
              <td>لايوجد لوائح ليتم عرضها</td>
            </tbody>
          </table>
        </div>
        
        <div className="vertical-line"></div>

        <div className="remain-fojj">
          <div>
            <span>افواج خرجت</span>
            <div className="point"></div>
          </div>
          <table>
            <thead className='header'>
              <td>الوصول</td>
              <td>الخروج</td>
              <td>الفوج</td>
            </thead>
            <tbody>
              <td>07:38:00</td>
              <td>07:38:00</td>
              <td>P1-A12-07</td>
            </tbody>
          </table>
        </div>

        <div className="vertical-line"></div>

        <div className="Exit-fojj">
          <div>
            <span>افواج متبقية</span>
            <div className="point"></div>
          </div>
          <table>
            <thead className='header'>
              <td>الوصول</td>
              <td>الخروج</td>
              <td>الفوج</td>
            </thead>
          </table>
          <div className="contanier">
            {fojjStats.map(stats => {
              return (            
                <FojjTime key={stats.id} fojjStats={stats}/>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
