import React from 'react'
import Block from '../Block/Block.js'
import Title from '../Title/Title.js'

export default function Project() {
    return (
        <>
            <Title title='PROJECTS'/>
            <Block height='80vh' background='#FED4AE' title='LADDER TO HEAVEN' reverse={true}/>
            <Block height='80vh' background='#8ABA89' title='WILLZIX TO THE MOON' reverse={true}/>
            <Block height='80vh' background='#FF8C8C' title='FAITH + 1' reverse={true}/>
        </>
    )
}