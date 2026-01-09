import React from 'react'
import btnIcon from "../assets/button-icon.png"
const Button = ({ text }) => {
    return (
        <>
            <button className='flex gap-2 transition-all drop-shadow-blue-300 hover:gap-4'>
                {text}
                <img src={btnIcon} alt="" />
            </button>
        </>
    )
}

export default Button