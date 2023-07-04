import React from 'react'

export default function About() {
  return (
    <div>
      <div className='text-center font-serif text-xl '>
        Want to hire the right person quickly ?<br/> We have arranged quick customizable templates to make hiring hassle free and effecient for you .<br/> Just follow these three easy steps .<br/>
        <span className='text-center font-serif text-base'>
          You can take advantage of the AI tools to autocomplete the first two steps and skip to the third step directly
        </span>
      </div>
      <div className='grid grid-cols-3 mt-6'>
        <div></div>
        <div className='grid grid-cols-3'>
          <div className='text-center text-2xl text-green-600 font-semibold'>Post</div>
          <div className='text-center text-2xl text-green-600 font-semibold'>Screen</div>
          <div className='text-center text-2xl text-green-600 font-semibold'>Interview</div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
