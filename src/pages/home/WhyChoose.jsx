import React from 'react'
import Button from '../../components/Button'

const WhyChoose = () => {
return (
<section className='section-container'>
    <div className='my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center'>
        <div>
            <h2 className='text-4xl font-bold'>Why <br /> Choosing Us</h2>
        </div>
        <div>
            <h3 className='text-2xl font-semibold mb-3'>Luxary facility</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente odit optio dolores officia distinctio
                fuga. Saepe inventore ullam iusto deleniti.</p>
            <Button text={'Learn more'} />
        </div>
        <div>
            <h3 className='text-2xl font-semibold mb-3'>Luxary facility</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente odit optio dolores officia distinctio
                fuga. Saepe inventore ullam iusto deleniti.</p>
            <Button text={'Learn more'} />
        </div>
        <div>
            <h3 className='text-2xl font-semibold mb-3'>Luxary facility</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente odit optio dolores officia distinctio
                fuga. Saepe inventore ullam iusto deleniti.</p>
            <Button text={'Learn more'} />
        </div>
    </div>
</section>
)
}

export default WhyChoose
