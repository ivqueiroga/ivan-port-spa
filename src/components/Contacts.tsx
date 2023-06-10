import React from 'react';
import './Contacts.css';

type Props = {}

function Contacts({}: Props) {
  return (
    <div className='contacts-container' id='contacts'>
      <h2>- Contato -</h2>
      <div>
        <label htmlFor='email'>
          Email:
        </label>
        <input id='email' name='email' style={{width: '40%', height: '40px', backgroundColor: 'white'}} type='text'/>
      </div>
      <div>
        <label htmlFor='subject'>
          Assunto:
        </label>
        <input id='subject' name='subject' style={{width: '40%', height: '40px', backgroundColor: 'white'}} type='text'/>
      </div>
      <div>
        <label htmlFor='message'>
          Mensagem:
        </label>
        <input id='message' name='message' style={{width: '40%', height: '40px', backgroundColor: 'white'}} type='textarea'/>
      </div>
    </div>
  )
}

export default Contacts