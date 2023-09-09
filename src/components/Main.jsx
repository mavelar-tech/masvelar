import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Intro from './Intro'
import Hello from './Hello'

const Main = () => {
    return (
        <div id='main' className='flex-grow -z-1 mt-20 mb-20 px-10 md:px-20 lg:px-40 Container'>
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
                <Intro />
                <Hello />
            </Scrollbars>
        </div>
    )
}

export default Main