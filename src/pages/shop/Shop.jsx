import React from 'react'
import banner from "../../assets/banner.png"
import Products from './Products'
const Shop = () => {
  return (
    <section className='min-h-screen'>
        <div className='w-full h-[400px] flex items-center justify-center bg-cover bg-center text-white' style={{backgroundImage:`url(${banner})`}}>
          <h1 className='text-4xl font-bold'>Shop Our Price</h1>

        </div>
          <Products headline=" What's Your Choose" />
    </section>
  )
}

export default Shop