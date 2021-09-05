import React from 'react'
import { useHistory } from 'react-router-dom'
import './Header.css'

export default function Header() {
    const history = useHistory()

    return (
        <header>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Wellfleet&display=swap" rel="stylesheet"/>
            <button className='header-button' onClick={() => history.push('/')}>Home</button>
            <button className='header-button' onClick={() => history.push('/attractions')}>Attractions</button>
            <button className='header-button' onClick={() => history.push('/projects')}>Projects</button>
            <button className='header-button' onClick={() => history.push('/about')}>About</button>
            <button className='header-button' onClick={() => history.push('/contact')}>Contact</button>
        </header>
    )
}