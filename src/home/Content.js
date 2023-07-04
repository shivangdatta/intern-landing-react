import React from 'react'
import Abouthead from './components/About/Abouthead'
import About from './components/About/About'
import Post from './components/Post/Post'

const mainstyle = {
  // overflowY: 'hidden',
  height : '100vh',
  width : '100vw',
}

export default function Content() {
  return (
    <div >
      <Abouthead/>
      <About/>
      <Post/>
     
    </div>
  )
}
