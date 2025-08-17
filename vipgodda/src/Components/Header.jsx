import React, { memo } from 'react'
import logo from '../assets/logo.jpg'

function Header() {
    return (
        <div className='flex items-center justify-center  py-4'>
            <img className='w-36 object-cover p-1 rounded-sm' src={logo} />
        </div>
    )
}

export default memo(Header)
