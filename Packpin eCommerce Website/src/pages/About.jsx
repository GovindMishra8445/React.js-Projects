import React from 'react'
import Title from "../components/Title";
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-18 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className=' my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti sunt culpa doloremque deserunt officia! Quia enim labore consequatur! Error numquam odit ipsum nostrum! Ex perspiciatis, nemo molestiae illo provident aspernatur?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio necessitatibus distinctio labore nam ad dolore ullam corrupti, laudantium quae corporis nostrum architecto qui repellat, accusamus velit, modi quibusdam nisi.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quas amet nesciunt hic veniam in officia iste. Ut qui, temporibus neque, in hic eos inventore quibusdam facere harum impedit recusandae.</p>

        </div>

      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className=' flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>
            Quality Assurance:
          </b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse non nisi cum est commodi libero accusantium totam perspiciatis laborum officiis. Mollitia eaque praesentium placeat eius vel! Unde, natus? Sapiente, exercitationem?</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>
            Convenience:
          </b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse non nisi cum est commodi libero accusantium totam perspiciatis laborum officiis. Mollitia eaque praesentium placeat eius vel! Unde, natus? Sapiente, exercitationem?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>
            Exceptional Customer Service:
          </b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse non nisi cum est commodi libero accusantium totam perspiciatis laborum officiis. Mollitia eaque praesentium placeat eius vel! Unde, natus? Sapiente, exercitationem?</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About