import React from 'react'

const Hello = () => {
    return (
        <div className='px-8 md:px-20 lg:px-35 h-full flex flex-col justify-around'>
            <div className='grid grid-cols-1 content-around md:justify-end lg:grid-cols-2'>
                <div className='flex flex-col mb-4'>
                    <div className='flex flex-row items-center'>
                        <span className="font-chakraPetch lg:text-[3.052rem] mr-5">HELLO. I AM </span>
                        <hr className="flex-grow sm:flex-shrink border-1 border-primary" />
                    </div>
                    <span className='text-accent font-chakraPetch font-medium text-[3.052rem] lg:text[
4.768rem] leading-tight mb-2 lg:leading-loose'> Mary Ann </span>
                    <p className='font-manrope font-medium text-xs ms:text-sm'> I build value by producing quality websites. </p>
                </div>
                <img src="/mean.jpg" alt="Mary Ann Velar" className="max-w-[270px] h-auto mr-auto 2xs:w-[full] 2xs:ml-auto" />
            </div>
        </div>
    )
}

export default Hello