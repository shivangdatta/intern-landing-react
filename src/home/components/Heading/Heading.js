import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'
import './Heading.module.css'


export default function Heading() {
  return (
    <div fill='transparent'>
      <div className="patterns overflow-y-hidden " fill='transparent'>
          <svg className='w-full lg:mt-48  '>
              <rect x="0" y="0" width="100%" height="100%" fill='transparent'  > </rect>
              
              <text x="50%" y="70%"  textAnchor="middle"  >
                  Hire-co
              </text>
          </svg>
      </div>
      <div className='grid grid-cols-4 '>
        <div className='  '></div>
        <div className='  '></div>
        <div className='   flex'>
        <AiFillLinkedin size={32} fill={'#0072b1'} className='sm :ml-2 md:ml-2 lg:ml-64 xl:64'/>
        <BiLogoGmail size={32} fill={'#c71610'} className='ml-2'/>
        </div>
        <div className='   '></div>
      </div>
    </div>
  )
}
