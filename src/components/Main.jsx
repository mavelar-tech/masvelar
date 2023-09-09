import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Intro from './Intro'
import Hello from './Hello'

const Main = () => {
    return (
        <div id='main' className='h-[36rem] max-h-[36rem] px-10 md:px-20 lg:px-40'>
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