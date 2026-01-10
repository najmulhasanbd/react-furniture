import React from 'react'
import { getImgUrl } from '../../utiles/getImageUrl'
import Rating from '../../components/Rating'
import { FiPlus } from 'react-icons/fi'

const ProductCard = ({ products }) => {
    return (
        <section>
            <div className='bg-[#FAFAFA]'>
                <img src={getImgUrl(products.imageUrl)} alt={products.name} />
            </div>
            <div className='p-3 bg-white dark:bg-black shadow-sm text-center'>
                <h4 className='text-base mb-1 text-white'>{products.category}</h4>
                <h3 className='text-white text-xl'>{products.name}</h3>
                <Rating rating={products.rating} />
                <div className='mt-5 flex justify-between items-center text-white '>
                    <p className='text-2xl'><sup>$</sup><span>{products.price}</span></p>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer'>
                        <FiPlus />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProductCard