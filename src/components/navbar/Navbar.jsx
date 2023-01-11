import React from 'react'
import './Navbar.scss'
import {IoIosArrowDown} from 'react-icons/io'
import {HiOutlineArrowLeft} from 'react-icons/hi'

export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <div className="left-last">
          <HiOutlineArrowLeft />
          <span>الدخول الى البوابة</span>
        </div>
        <div className="left-center">
          <div className="mode">
            <div className="ball"></div>
            <div className="bar"></div>
          </div>
          <span>الوضع الداكن</span>
        </div>
        <div className="left-first">
          <IoIosArrowDown />
          <span>الاعدادات</span>
        </div>
      </div>
      <div className="right">
        <span>وزارة الحج والعمرة</span>
        <div className='line'></div>
        <div className='main'>
          <span>البيانات التشغيلية للتفويج</span>
          <div className="logo"></div>
        </div>
      </div>
    </nav>
  )
}
