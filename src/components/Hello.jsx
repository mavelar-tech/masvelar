import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hello = () => {
    return (
        <div className='px-10 md:px-20 lg:px-35 h-full flex flex-col justify-around'>
            <div className="flex flex-wrap items-center">
                <h1 className="font-manrope font-semibold text-[3.052rem] md:text-[3.815rem] lg:text-[4.768rem] m-0">i</h1>
                <h1 className="text-accent m-0 px-3 text-[3.052rem] md:text-[3.815rem] lg:text-[4.768rem]">
                    <TypeAnimation
                        className="font-manrope font-semibold type"
                        sequence={['design', 2000, 'develop', 2000, 'deploy', 2000]}
                        repeat={Infinity}
                        deletionSpeed={30}
                        cursor={false}
                    />
                </h1>
                <h1 className="font-manrope font-semibold text-[3.052rem] md:text-[3.815rem] lg:text-[4.768rem] m-0">websites</h1>
            </div>
        </div>
    )
}

export default Hello