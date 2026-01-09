import React from 'react'
import bannerImage from "../../assets/banner.png"
import { FaSearch } from 'react-icons/fa'
import TooltipButton from '../../components/TooltipButton'

const Hero = () => {
  return (
    <div className='h-screen relative bg-cover bg-center text-white' style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <section className='md:pt-44 px-2 pt-24 text-center space-y-6 md:w-1/2 mx-auto'>
        <h1 className='text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug'>Make your interior More Mnimalistc & Modern</h1>
        <p className='text-2xl font-normal  mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quaerat nihil illum quis.</p>

        <div className='relative inline-block z-30'>
          <input type="text" placeholder='Search Furniture' className='w-full md:w-80 px-6 py-2 bg-black opacity-50 placeholder:text-white rounded-full border border-b-gray-300 focus:outline-none mt-8' />
          <div className='absolute right-2 top-13 transform -translate-y-1/2 p-2 bg-blue-500 rounded-full cursor-pointer'>
            <FaSearch />
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm'></div>
        <div className='absolute bottom-40 left-24 group'>
          <TooltipButton />
        </div>
      </section>
    </div>
  )
}

export default Hero