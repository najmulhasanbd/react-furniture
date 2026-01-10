import React from 'react'
import experience from "../../assets/expricences.png"
import Button from '../../components/Button'


const Experience = () => {
    return (
        <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>
            <div className='md:w-1/2 md:h-[541px]'>
                <img src={experience} alt="" className='w-full h-full' />
            </div>
            <div>
                <h3 className='uppercase text-lg font-semibold text-yellow-500'>experience</h3>
                <h2 className='capitalize text-4xl font-bold mb-4 md:w-1/2'>We proview you the best experience</h2>
                <p className='text-base  mb-5 lg:w-2/3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem est maiores blanditiis ratione. Velit repellendus optio cupiditate officia, blanditiis mollitia officiis reiciendis eligendi beatae suscipit nesciunt cumque aperiam ipsum veniam? Ab fuga dignissimos, rem est ex impedit reiciendis, quae, obcaecati sit asperiores autem saepe libero suscipit quibusdam blanditiis. Alias, labore!</p>
                <Button text={'More Info'} />
            </div>
        </section>
    )
}

export default Experience