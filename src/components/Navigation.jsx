import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { PiCode, PiX, PiFacebookLogoFill, PiGithubLogoFill, PiDribbbleLogoFill, PiLinkedinLogoFill } from "react-icons/pi";
import Main from './Main'

const Navigation = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <>
            {
                nav ? (
                    <div className='fixed w-full h-screen p-5 bg-background grid grid-cols-1 content-between'>
                        <div className="flex justify-end">
                            <div onClick={handleNav} className='bg-primary z-[99] p-1 rounded-full cursor-pointer md:hidden'>
                                <PiX className='text-white stroke-[2px]' size={23} />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <a href="">
                                <h1 className='text-text font-medium pl-5'> &lt;home /&gt; </h1>
                            </a>
                            <a href="">
                                <h1 className='text-text font-medium pl-5'> &lt;milestones /&gt; </h1>
                            </a>
                            <a href="">
                                <h1 className='text-text font-medium pl-5'> &lt;expertise /&gt; </h1>
                            </a>
                            <a href="">
                                <h1 className='text-text font-medium pl-5'> &lt;projects /&gt; </h1>
                            </a>
                        </div>

                        <div className='flex flex-row justify-end'>
                            <a href="" className='pr-2'>
                                <PiFacebookLogoFill className='text-primary' size={25} />
                            </a>
                            <a href="" className='pr-2'>
                                <PiGithubLogoFill className='text-primary' size={25} />
                            </a>
                            <a href="" className='pr-2'>
                                <PiDribbbleLogoFill className='text-primary' size={25} />
                            </a>
                            <a href="" >
                                <PiLinkedinLogoFill className='text-primary' size={25} />
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className='fixed w-full h-screen p-5 bg-background grid grid-cols-1 content-between'>
                        <div className='flex flex-row items-center justify-between'>
                            <a href="" className='text-primary font-semibold font-chakraPetch'> .masvelar_ </a>
                            <div onClick={handleNav} className='bg-primary z-[99] p-1 rounded-full cursor-pointer md:hidden'>
                                <PiCode className='text-white stroke-[2px]' size={23} />
                            </div>
                        </div>
                        <Main />
                        <div className='flex flex-row items-center justify-between'>
                            <p className='pr-2 text-primary text-[10px] mb-0'> © 2023 </p>
                            <div className='pl-5 text-end'>
                                <span className='pr-2 text-xs'> Interested? </span> <a href="" className='text-accent text-xs font-medium'> Let's Talk </a>
                            </div>
                        </div>
                    </div>
                )
            }

            <div className='fixed w-full h-screen p-5 bg-background md:grid grid-cols-1 content-between hidden'>
                <div className='flex flex-row items-center justify-between'>
                    <a href="" className='text-primary text-[18px] font-semibold font-chakraPetch'> .masvelar_ </a>
                    <div className='flex flex-row'>
                        <a href="" className='pr-3'>
                            <PiFacebookLogoFill className='text-primary' size={28} />
                        </a>
                        <a href="" className='pr-3'>
                            <PiGithubLogoFill className='text-primary' size={28} />
                        </a>
                        <a href="" className='pr-3'>
                            <PiDribbbleLogoFill className='text-primary' size={28} />
                        </a>
                        <a href="">
                            <PiLinkedinLogoFill className='text-primary' size={28} />
                        </a>
                    </div>
                </div>
                <Main />
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center'>
                        <p className='text-primary text-[12px] mb-0 pr-10'> © 2023 </p>
                        <div className='flex flex-row'>
                            <a href="">
                                <p className='mb-0 text-text text-sm font-semibold pr-2'> &lt;home /&gt; </p>
                            </a>
                            <a href="">
                                <p className='mb-0 text-text text-sm font-semibold pr-2'> &lt;milestones /&gt; </p>
                            </a>
                            <a href="">
                                <p className='mb-0 text-text text-sm font-semibold pr-2'> &lt;expertise /&gt; </p>
                            </a>
                            <a href="">
                                <p className='mb-0 text-text text-sm font-semibold'> &lt;projects /&gt; </p>
                            </a>
                        </div>
                    </div>
                    <div className='pl-5 text-end'>
                        <span className='pr-2 text-sm'> Interested? </span> <a href="" className='text-accent text-sm font-medium'> Let's Talk </a>
                    </div>
                </div>
            </div>

            <div className='fixed w-full h-screen p-5 bg-background lg:grid grid-cols-1 content-between hidden'>
                <div className='flex flex-row items-center justify-between'>
                    <a href="" className='text-primary text-[20px] font-semibold font-chakraPetch'> .masvelar_ </a>
                    <div className='flex flex-row'>
                        <a href="" className='pr-3'>
                            <PiFacebookLogoFill className='text-primary' size={30} />
                        </a>
                        <a href="" className='pr-3'>
                            <PiGithubLogoFill className='text-primary' size={30} />
                        </a>
                        <a href="" className='pr-3'>
                            <PiDribbbleLogoFill className='text-primary' size={30} />
                        </a>
                        <a href="">
                            <PiLinkedinLogoFill className='text-primary' size={30} />
                        </a>
                    </div>
                </div>
                <Main />
                <div className='flex flex-row items-center justify-between'>
                    <p className='text-primary text-[12px] mb-0 pr-10'> Copyright © 2023 </p>
                    <div className='flex flex-row'>
                        <a href="">
                            <p className='mb-0 text-text text-sm font-semibold pr-2'> &lt;home /&gt; </p>
                        </a>
                        <a href="">
                            <p className='mb-0 text-text text-sm font-semibold pr-2'> &lt;milestones /&gt; </p>
                        </a>
                        <a href="">
                            <p className='mb-0 text-text text-sm font-semibold pr-2'> &lt;expertise /&gt; </p>
                        </a>
                        <a href="">
                            <p className='mb-0 text-text text-sm font-semibold'> &lt;projects /&gt; </p>
                        </a>
                    </div>
                    <div className='pl-5 text-end'>
                        <span className='pr-2 text-sm'> Interested? </span> <a href="" className='text-accent text-sm font-medium'> Let's Talk </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation