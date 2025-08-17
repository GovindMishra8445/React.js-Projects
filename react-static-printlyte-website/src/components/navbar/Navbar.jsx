import React from 'react'
import img from "/src/assets/Printlyte.svg"

export default function Navbar() {
  return (
    <header className='p-5 pl-20'>
        <div className='p-5'>
                <img src={img} className='max-w-100% max-h-100%'/>
        </div>
    </header>
  )
}
