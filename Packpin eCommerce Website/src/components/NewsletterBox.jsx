import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
    event.preventDefault();
    
    }

  return (
    <div className=' text-center'>
        <p className='text-2xl font-medium  text-gray-800'>
            Subscribe to our newsletter and get 10% off your first purchase
        </p>
        <p className='text-gray-400 mt-3'>
            Stay up to date with the latest news, trends, and exclusive offers
        </p>
        <form onSubmit={onSubmitHandler} action="" className='w-full flex gap-2 items-center mt-5 sm:w-1/2 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your email address' className='w-full sm:flex-1 outline-none p-4' required/>
            
        </form>
        <button type='submit' className='bg-black text-white px-8 py-4 rounded font-semibold text-xl max-sm:text-xs'>Subscribe</button>
    </div>
  )
}

export default NewsletterBox