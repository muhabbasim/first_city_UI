import React, { useState } from 'react'
import Fojj from '../Fojj/Fojj';
import './Details-info.scss'

export default function Details() {
  const [ openOption, setOpenOption ] = useState(false);
  const [ openOption2, setOpenOption2 ] = useState(false);
  const [ fojj, setFojj ] = useState(false);
  
  const openDetainls= () => {
    setFojj(true)
    setOpenOption(false)
    setOpenOption2(false)
  }

  return (
    <div className='details-info'>
      <div className="items">

        <div className="connection">
          <div className="item">
            <div className="circle" onClick={()=> setOpenOption(!openOption)}>
              <span className="quantity">800</span>
            </div>
            <div className='item-info'>
              <div>JMR</div>
              <div>محطة الجمرات</div>
            </div>
          </div>

          <div className="arrow">
            <span className='numbers'>0</span>
            <div className="line"></div>
            <div className="point"></div>
          </div>

          <div className="item">
            <div className="circle" onClick={()=> setOpenOption(!openOption)}>
              <span className="quantity">11,650</span>
            </div>
            <div className='item-info'>
              <div>HRM</div>
              <div>المسجد الحرام</div>
            </div>
          </div>
        </div>

        <div className="connection" style={{marginLeft : -90}}>
          <div className="item">
            <div className="circle" onClick={()=> setOpenOption(!openOption)}>
              <span className="quantity">0</span>
            </div>
            <div className='item-info'>
              <div>ASM</div>
              <div>نقاط التجمع</div>
            </div>
          </div>

          <div className="arrow">
            <span className='numbers'>-</span>
            <div className="point-left"></div>
            <div className="line"></div>
          </div>

          <div className="item">
            <div className="circle" onClick={()=> setOpenOption(!openOption)}>
              <span className="quantity">1,875</span>
            </div>
            <div className='item-info'>
              <div>INT</div>
              <div>حجاج الداخل</div>
            </div>
          </div>
        </div>

        <div className="side-arrows">
          <div className="arrow-up">
            <span className='numbers-up'>0</span>
            <div className="point-up"></div>
            <div className="line-up"></div>
          </div>
          <div className="arrow-down">
            <span className='numbers-down'>0</span>
            <div className="line-down"></div>
            <div className="point-down"></div>
          </div>
        </div>

        <div className="arrow-rotate">
          <span className='numbers-rotate'>0</span>
          <div className="point-left-rotate"></div>
          <div className="line-rotate"></div>
        </div>

        <div className="connection">
          <div className="item">
            <div className="circle" onClick={()=> setOpenOption(!openOption)}>
              <span className="quantity">1,000</span>
            </div>
            <div className='item-info'>
              <div>MIN</div>
              <div>مخيمات منى</div>
            </div>
          </div>

          <div className="arrow">
            <span className='numbers'>0</span>
            <div className="line"></div>
            <div className="point"></div>
          </div>

          <div className="item">
    
            <div className="circle" onClick={()=> setOpenOption(!openOption)}>
              <span className="quantity">43,434</span>
            </div>
            <div className='item-info'>
              <div>ARF</div>
              <div>مشعر عرفات</div>
            </div>

            { openOption && <section className="options" onClick={()=> setOpenOption2(!openOption2)}>
                <span>اختر عملية</span>
                <div className="arrow-down">
                  <div className="point-down"></div>
                </div>
                <div className='line'></div>
                <div className="arrow-down2">
                  <div className="point-down2"></div>
                </div>
              </section>
            }
          </div>

          <div className="arrow">
            <span className='numbers'>0</span>
            <div className="line"></div>
            <div className="point"></div>
          </div>

          <div className="item">
            <div className="circle" onClick={()=> setOpenOption(!openOption)}>
              <span className="quantity">0</span>
            </div>
            <div className='item-info'>
              <div>MUZ</div>
              <div>مشعر مزدلفة</div>
            </div>
          </div>

          <div className="arrow-curved">
            <span className='numbers'>0</span>
            <div className="point-up"></div>
            <div className="line"></div>
          </div>
        </div>

        { openOption2 && <section className="options2">
          <span>ابحث</span>
          <div className='line'></div>
          <ul>
            <li><a href=""></a></li>
            <li onClick={()=> openDetainls()}><a href=""></a>ARFMUZ</li>
            <li onClick={()=> openDetainls()}><a href=""></a>MINARF</li>
          </ul>
        </section>}
       

      </div>
      { fojj && <Fojj setFojj={setFojj}/> }
      {/* <Fojj/> */}
    </div>
  )
}
