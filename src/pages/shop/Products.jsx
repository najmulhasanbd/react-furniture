import React from 'react'
import Button from '../../components/Button'
import { products } from '../../utiles/products'

const Products = ({ headline }) => {
    const categories = ["Chair", "Beds", 'Sofa', 'Lamps']
    return (
        <section className='section-container'>
            <h2 className='text-4xl font-bold text-center my-8'>{headline}</h2>

            <div className='bg-[#EEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
                <div className='flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4'>
                    {
                        categories.map((category) => (
                            <button key={category} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-blue-500 hover:text-white transition-colors cursor-pointer`}>{category}</button>
                        ))
                    }
                </div>
            </div>

            <div>
                {
                    products.map((product) => (
                        <div key={product.id}>{product.name}</div>
                    ))
                }
            </div>
        </section>
    )
}

export default Products
