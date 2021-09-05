import React from 'react'
import './Title.css'

export default function Title(props) {
    let fontSize = '72px'
    let marginBottom = '0'
    let marginTop = '1%'
    
    if(props.fontSize) fontSize = props.fontSize
    if(props.marginBottom) marginBottom = props.marginBottom
    if(props.marginTop) marginTop = props.marginTop

    return (
        <div className='title' style={{'margin-bottom': marginBottom}}>
            <span className='pageTitle' style={{'font-size': fontSize, 'margin-top' : marginTop}}>{props.title}</span>
        </div>        
    )
}