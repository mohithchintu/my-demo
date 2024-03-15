import React from 'react'
import { TimeLine } from '../components/timeline'
import { StickyScrollMemory } from '../components/sticky-memory'
import { BDay } from '../components/bday'
import { BGTwo } from '../components/bg2'
import { BGOne } from '../components/bg1'
import { BGThree } from '../components/bg3'
import { DirectionHover } from '../components/direction'


const TimeLinepage = () => {
    return (
        <>
            <TimeLine />
            <br />
            <BGOne />
            <br />
            <BGTwo />
            <br />
            <BGThree />
            <br />
            <div className='grid grid-cols-2'>
                <DirectionHover />
                <BDay />
            </div>
            <br />
            <StickyScrollMemory />
        </>
    )
}

export default TimeLinepage


