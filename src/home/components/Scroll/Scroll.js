import React from 'react'
import {FaGlasses ,FaChampagneGlasses} from 'react-icons/fa'
import {GiGearStickPattern , GiCrackedGlass} from 'react-icons/gi'
import {FcGlobe ,FcCamcorderPro , FcCustomerSupport , FcBearish , FcBbc , FcBusinessContact} from 'react-icons/fc'
import './Scroll.css'


export default function Scroll() {
  return (
  <div className='overflow-x-hidden overflow-y-hidden mt-10'>
    <div className='text-center text-4xl font-semibold font-serif underline underline-offset-3 mb-2'>Our Partners</div>
    <div className="bar overflow-x-hidden overflow-y-hidden">
        <span className="bar_content overflow-x-hidden">
            <div className='flex text-2xl'>

                <FcCustomerSupport className='ml-24 mr-2' size={50}/> company1
                <GiGearStickPattern className='ml-24 mr-2' size={50}/> company2
                {/* <FaChampagneGlasses/> company3 */}
                <FcCamcorderPro className='ml-24 mr-2' size={50}/> company4
                <GiCrackedGlass className='ml-24 mr-2' size={50}/> company5
                <FaGlasses className='ml-24 mr-2' size={50}/> company6
                <FcGlobe className='ml-24 mr-2' size={50}/> company7
                <FcBusinessContact className='ml-24 mr-2' size={50}/> company7
                {/* <FcBearish className='ml-24' size={50}/> company8 */}
                {/* <FcBbc className='ml-24' size={50}/> company9 */}
            </div>
        </span>
        
    </div>
  </div>
  )
}
