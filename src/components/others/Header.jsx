import React, { useState, useEffect } from 'react'
import { PiCode, PiX, PiFacebookLogoFill, PiGithubLogoFill, PiDribbbleLogoFill, PiLinkedinLogoFill } from "react-icons/pi";

const Header = ({ setIsFooterHidden }) => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setIsFooterHidden(!nav);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { 
                setNav(false);
                setIsFooterHidden(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsFooterHidden]);


    return (
        <>
            {
                nav ? (
                    <div className='fixed w-full h-screen p-5 bg-background grid grid-cols-1 content-between md:hidden'>
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
                    <header className='fixed w-full top-0 left-0 p-5'>
                        <div className='md:hidden'>
                            <div className='flex flex-row items-center justify-between'>
                                <a href="" className='text-primary font-semibold font-chakraPetch'> .masvelar_ </a>
                                <div onClick={handleNav} className='bg-primary z-[99] p-1 rounded-full cursor-pointer md:hidden'>
                                    <PiCode className='text-white stroke-[2px]' size={23} />
                                </div>
                            </div>
                        </div>

                        <div className='hidden md:block lg:hidden'>
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
                        </div>

                        <div className='hidden lg:block'>
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
                        </div>
                    </header>
                )
            }
        </>

    )
}

export default Header