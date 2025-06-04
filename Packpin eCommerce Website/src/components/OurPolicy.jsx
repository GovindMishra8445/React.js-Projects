import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div className='flex flex-col items-center gap-2'>
            <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>
                Easy Exchange Policy
            </p>
            <p className='text-gray-400'>
                We offer a simple and hassle-free exchange policy. If you're not satisfied with your purchase,
            </p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>
                7 Days Return Policy
            </p>
            <p className='text-gray-400'>
                W provide a 7-day return policy that starts the day you receive your order. We'll refund the full amount.
            </p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <img src={assets.support_img} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>
                Best Customer Support
            </p>
            <p className='text-gray-400'>
                Our customer support team is available 24/7 to assist you with any queries you may
            </p>
        </div>
    </div>
  )
}

export default OurPolicy