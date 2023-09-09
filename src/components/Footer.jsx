import React from 'react'

const Footer = ({ isHidden }) => {
    if (isHidden) {
        return null;
    }

    return (
        <footer className='fixed w-full bottom-0 right-0 p-5'>
            <div className='md:hidden'>
                <div className='flex flex-row items-center justify-between'>
                    <p className='pr-2 text-primary text-[10px] mb-0'> © 2023 </p>
                    <div className='pl-5 text-end'>
                        <span className='pr-2 text-xs'> Interested? </span> <a href="" className='text-accent text-xs font-medium'> Let's Talk </a>
                    </div>
                </div>
            </div>

            <div className='hidden md:block lg:hidden'>
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

            <div className='hidden lg:block'>
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
        </footer>
    )
}

export default Footer