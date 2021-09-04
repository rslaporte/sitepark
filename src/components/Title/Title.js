import React from 'react'
import './Title.css'

export default function Title(props) {
    let fontSize = '72px'
    let marginBottom = '0px'
    
    if(props.fontSize) fontSize = props.fontSize
    if(props.marginBottom) marginBottom = props.marginBottom

    return (
        <div className='title' style={{'margin-bottom': marginBottom}}>
            <span className='pageTitle' style={{'font-size': fontSize}}>{props.title}</span>
        </div>        
    )
}