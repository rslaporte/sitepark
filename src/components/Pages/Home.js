import React from 'react'
import Block from '../Block/Block.js'

export default function Home() {
    return (
        <>
            <img src={require("../../assets/img/main.png").default} alt={'main'} style={{'max-width':'100%', 'width': '100vw', 'height': '90vh'}}/>
            <Block height='60vh' background='#E7A6E4' title='WELCOME TO SOUTH PARK'/>
            <Block height='80vh' background='#E59292' title='MEET CELEBRITIES' reverse={true}/>
            <Block height='80vh' background='#8EA6E2' title='WE LIKE DIVERSITY'/>
        </>
    )
}
