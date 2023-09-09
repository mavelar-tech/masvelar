import React from 'react'

const Hello = () => {
    return (
        <div className='px-8 sm:px-20 lg:px-28 h-full flex flex-col justify-around'>
            <div className='grid grid-cols-1 content-center customMD:grid-cols-2'>
                <div className='flex flex-col mb-4 mr-10 customMD:self-center'>
                    <div className='flex flex-row items-center'>
                        <span className="font-chakraPetch lg:text-[20px] mr-5">HELLO. I AM </span>
                        <hr className="flex-grow sm:flex-shrink border-1 border-primary" />
                    </div>
                    <span className='text-accent font-chakraPetch font-semibold text-[3.052rem] lg:text-[3.815rem] leading-tight mb-2'> Mary Ann </span>
                    <p className='font-manrope font-medium text-xs md:text-sm lg:text-base'> I build value by producing quality websites. </p>
                </div>
                <div className='flex justify-start sm:justify-end'>
                    <img src="/mean.jpg" alt="Mary Ann Velar" className="max-w-[265px] h-auto xs:w-[full] lg:max-w-[300px]" />
                </div>
            </div>
        </div>
    )
}

export default Hello