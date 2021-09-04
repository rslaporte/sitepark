import React from 'react'
import Block from '../Block/Block.js'
import Title from '../Title/Title.js'

export default function About() {
    return (
        <>
            <Title title='ABOUT'/>
            <Block height='60vh' background='' title='ERIC CARTMAN' imgHeight='50vh' imgWidth='60vh'/>
            <Block height='60vh' background='' title='BUTTERS STOTCH' imgHeight='50vh' imgWidth='60vh'/>
        </>
    )
}