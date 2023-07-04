import React from 'react'

export default function Under() {
  return (
    <div className='text-xl font-serif sm:w-full text-center mt-16 place-items-center p-2'>
        Offering Hiring solutions for companies of all sizes at no hidden costs , Find the right employees tailor made to your requirements.<br/>
        We offer a platform where you can hire professionals from all backgrounds and at all experience levels.<br/>
        Many exciting features with detailed analytics of prespective employees.
        <br/>
        <div className='grid grid-cols-5 items-center p-5'>
            <div ></div>
            <div ></div>
            <div >
                <button type="submit" className="w-full h-12 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-green-800">Learn More</button>
            </div>
            <div ></div>
            <div ></div>

        </div>
    </div>
  )
}
