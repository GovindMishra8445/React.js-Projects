import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const SubCategoryItem = ({id,image,name}) => {

    const {currency}=useContext(ShopContext)


  return (
            <div className='rounded h-auto items-center justify-center flex flex-col p-2'>
                <div className='w-12 p-2  max-sm:w-10 h-auto bg-gray-200 rounded-full overflow-hidden'>
                <img src={image} alt={name} className='transition ease-in-out mix-blend-multiply' />
                </div>
            <p className='pt-3 pb-1 text-sm font-medium text-center '>{name}</p>
            </div>


  )
}


export default SubCategoryItem