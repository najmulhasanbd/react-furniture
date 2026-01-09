import React from 'react'

const TooltipButton = () => {
    return (
        <>
            <button className='relative p-4 bg-white/25 rounded-full border border-1 bg-white text-xl'>
                <div className='hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex'>
                    <div className='size-6 bg-red-700 border border-white rounded-full'></div>
                    <div className='size-6 bg-green-700 border border-white rounded-full'></div>
                    <div className='size-6 bg-blue-700 border border-white rounded-full'></div>

                    <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35 hover:cursor-pointer'></div>
                </div>
            </button>
        </>
    )
}

export default TooltipButton