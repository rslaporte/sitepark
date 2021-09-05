import React from 'react'
import Title from '../Title/Title.js'
import Form from '../Form/Form.js'

export default function Contact() {
    return (
        <>
            <Title title='CONTACT' fontSize='50px' marginBottom='-4%' marginTop='0'/>
            <div>
                <span className='text' style={{'padding':'0'}}>
                    If you want to contact us for any reason, specially if you want to give some donation for one of our projects, 
                    please sign this form. We will return as soon as we can.
                </span>
                <Form />
            </div>
        </>
    )
}