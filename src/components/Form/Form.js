import React from 'react'
import './Form.css'

export default function Form() {
    return (
        <form>
            <div className='inputLine'>
                <div className='inputField' style={{'margin-right': '1%'}}>
                    <label htmlFor='input'>Name:</label>
                    <input type="text" id='input' style={{'width' : '60vw'}}/>
                </div>
                <div className='inputField'>
                    <label htmlFor='input'>Phone:</label>
                    <input type="text" id='input' style={{'width' : '20vw'}}/>
                </div>
            </div>

            <div className='inputLine'>
                <div className='inputField' style={{'margin-right': '1%'}}>
                    <label htmlFor='input'>RG:</label>
                    <input type="text" id='input' style={{'width' : '30.5vw'}}/>
                </div>
                <div className='inputField' style={{'margin-right': '1%'}}>
                    <label htmlFor='input'>CPF:</label>
                    <input type="text" id='input' style={{'width' : '28vw'}}/>
                </div>
                <div className='inputField'>
                    <label for='input'>CEP:</label>
                    <input type="text" id='input' style={{'width' : '20vw'}}/>
                </div>
            </div>

            <div className='inputLine'>
                <div className='inputField'>
                    <label for='input'>Adress:</label>
                    <input type="text" id='input' style={{'width' : '81.5vw'}}/>
                </div>
            </div>

            <div className='inputLine'>
                <div className='inputField' style={{'margin-right': '1%'}}>
                    <label for='input'>Complement:</label>
                    <input type="text" id='input' style={{'width' : '30.5vw'}}/>
                </div>
                <div className='inputField' style={{'margin-right': '1%'}}>
                    <label for='input'>Country:</label>
                    <input type="text" id='input' style={{'width' : '28vw'}}/>
                </div>
                <div className='inputField'>
                    <label for='input'>City:</label>
                    <input type="text" id='input' style={{'width' : '20vw'}}/>
                </div>
            </div>

            <div className='inputLine'>
                <div className='inputField'>
                    <label for='input'>Email:</label>
                    <input type="text" id='input' style={{'width' : '81.5vw'}}/>
                </div>
            </div>

            <div className='inputLine'>
                <div className='inputField'>
                    <button style={{'width' : '15vw', 'height':'60%', 'font-family':'Wellfleet', 'font-size' : '20px'}}>Submit</button>
                </div>
            </div>
            
        </form>
    )
}
