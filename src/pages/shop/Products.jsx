import React, { useState } from 'react'
import Button from '../../components/Button'
import { products } from '../../utiles/products'
import btnIcon from "../../assets/button-icon.png"
import ProductCard from './ProductCard'

const Products = ({ headline }) => {
    const categories = ["Chair", "Beds", 'Sofa', 'Lamps']
    const [selectedCategory, setSelectedCategory] = useState('Sofa');
    const [visibleProduct, setVisibleProduct] = useState(4);
    const filteredProducts = products.filter((product) => product.category === selectedCategory);

    const loadMoreProducts = () => {
        setVisibleProduct((prev) => prev + 4)
    }

    return (
        <section className='section-container'>
            <h2 className='text-4xl font-bold text-center my-8'>{headline}</h2>

            <div className='bg-[#EEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
                <div className='flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4'>
                    {
                        categories.map((category) => (
                            <button onClick={() => { setSelectedCategory(category); setVisibleProduct(4) }} key={category} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-blue-500 hover:text-white transition-colors cursor-pointer ${selectedCategory === category ? 'bg-white text-blue-600' : ''}`}>{category}</button>
                        ))
                    }
                </div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    filteredProducts.slice(0, visibleProduct).map((product) => (
                        <ProductCard products={product} />
                    ))
                }
            </div>

            <div>
                {
                    visibleProduct < filteredProducts.length && (
                        <div className='flex justify-between mt-3'>
                            <button onClick={loadMoreProducts} className='flex gap-2 transition-all drop-shadow-blue-300 cursor-pointer hover:gap-4'>
                                View All
                                <img src={btnIcon} alt="" />
                            </button>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Products
