import React from 'react'
import { useHistory } from 'react-router-dom'
import './Header.css'

export default function Header() {
    const history = useHistory()

    console.log(history)

    return (
        <header>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Wellfleet&display=swap" rel="stylesheet"/>
            <button onClick={() => history.push('/')}>Home</button>
            <button onClick={() => history.push('/attractions')}>Attractions</button>
            <button onClick={() => history.push('/projects')}>Projects</button>
            <button onClick={() => history.push('/about')}>About</button>
            <button onClick={() => history.push('/contact')}>Contact</button>
        </header>
    )
}