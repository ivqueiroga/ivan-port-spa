import React, { useState} from 'react';
import { IContact } from '../Interface/Interface';
import './Contacts.css';

function Contacts() {
  const [contact, setContacts] = useState<IContact>({
    email: 'email@email.com',
    subject: 'Contato via página <Ivan Portfolio SPA>',
    message: 'Olá Ivan, \nGostaria de entrar em contato para que possamos conversar sobre o que vi em seu portfólio',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(contact);
  };
  
  const handleChange = (e: any) => {
    switch (e.target.name) {
      case 'email':
        setContacts(prevState => ({...prevState, email: e.target.value}));
        break;
      case 'subject':
        setContacts(prevState => ({...prevState, subject: e.target.value}));
        break;
      case 'message':
        setContacts(prevState => ({...prevState, message: e.target.value}));
        break;
    }
  }

  return (
    <div className='contacts-container' id='contacts'>
      <h2>- Contato -</h2>
      <form method="post" onSubmit={handleSubmit} className='form-container'>
        <div className='input-container'>
          <label className='input-areas'>
              Email:
              <textarea
                name="email"
                defaultValue={contact.email}
                onChange={handleChange}
                rows={1}
                cols={40}
              />
          </label>
          <label className='input-areas'>
            Assunto: <input name="subject" defaultValue="Subject" />
            <textarea
              name="subject"
              defaultValue={contact.subject}
              onChange={handleChange}
              rows={1}
              cols={40}
            />
          </label>
          <label className='input-areas'>
            Mensagem:
            <textarea
              name="message"
              defaultValue={contact.message}
              onChange={handleChange}
              rows={4}
              cols={40}
            />
          </label>
        </div>
        <button type="submit">Enviar Email</button>
    </form>
    </div>
  )
}

export default Contacts