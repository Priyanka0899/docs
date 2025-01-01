import React from 'react'
import Card from './Card'

function Foreground() {
  return (
    <div>
      <>
      <div className='fixed top-0 left-0 z-[3] w-full h-full'></div>
      <Card/>
      </>
    </div>
  )
}

export default Foreground
