import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Intro from './Intro'
import Hello from './Hello'

const Main = () => {
    return (
        <div className='fixed overflow-hidden w-full h-screen p-20 md:p-30 lg:p-36 ScrollSnap'>
            <Scrollbars
                autoHide={false}
                style={{overflowX: 'hidden'}}
                renderThumbVertical={({ style, ...props }) => (
                    <div
                        {...props}
                        className='react-custom-scrollbars-thumb'
                        style={{ width: '3px', height: '100%' }}
                    />
                )}
                renderTrackVertical={({ style, ...props }) => (
                    <div
                        {...props}
                        className='react-custom-scrollbars-track'
                        style={{ width: '3px', height: '100%' }}
                    />
                )}>
                <Intro className='ScrollSnapContent' />
                <Hello className='ScrollSnapContent' />
            </Scrollbars>
        </div>
    )
}

export default Main