import React, { useState, useRef } from 'react';
import { IContact } from '../Interface/Interface';
import './Contacts.css';
import emailjs from '@emailjs/browser';
import {DiGithubBadge} from 'react-icons/di';
import {MdEmail} from 'react-icons/md';
import {FaLinkedin, FaWhatsapp}  from 'react-icons/fa';

const ALERT = {
  SENDIT: 'Mensagem enviada com sucesso!!',
  ERROR: 'Falha ao enviar mensagem',
}

const links ={
  email: 'ivanqueirogap@gmail.com',
  phone: '+55 (31) 99278-2139',
  github: 'https://github.com/ivqueiroga',
  linkedin: 'https://www.linkedin.com/in/ivanqueirogap/',
}

const ICONSIZE = 20;

function Contacts() {
  const form = useRef<HTMLFormElement | null>(null);

  const [contact, setContacts] = useState<IContact>({
    from_name: '',
    subject: 'Contato via página de Portfolio SPA',
    message: 'Olá Ivan, \nGostaria de entrar em contato para que possamos conversar sobre o que vi em seu portfólio',
  });

  const handleSubmit = (e: any) => {
  e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID || '', process.env.REACT_APP_TEMPLATE_ID || '', form.current!, process.env.REACT_APP_USER_ID)
      .then((result) => {
        alert(ALERT.SENDIT);
    }, (error) => {
        alert(`${error.status}, ${ALERT.ERROR}`);
    });
  };
  
  const handleChange = (e: any) => {
    switch (e.target.name) {
      case 'from_name':
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
      <form ref={form} method="post" onSubmit={handleSubmit} className='form-container'>
        <h2>- Contato -</h2>
        <div className='input-container'>
          <label className='input-areas'>
              Email:
              <textarea
                placeholder='Digite aqui seu Email'
                name="from_name"
                defaultValue={contact.from_name}
                onChange={handleChange}
                rows={1}
                cols={40}
              />
          </label>
          <label className='input-areas'>
            Assunto:
            <textarea
              name="subject"
              defaultValue={contact.subject}
              onChange={handleChange}
              rows={1}
              cols={40}
            />
          </label>
          <label className='input-areas message'>
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
    <div className='social-container'>
      <h3>Redes Sociais</h3>
      <div className='social-link-container'>
        <label>
          <a href={links.github} target='_blank' rel='noreferrer'>
            <DiGithubBadge className='social-icon' size={ICONSIZE}/>
            /ivqueiroga
          </a>
        </label>
        <label>
          <a href={links.linkedin} target='_blank' rel='noreferrer'>
          <FaLinkedin className='social-icon' size={ICONSIZE}/>
            /in/ivanqueirogap/
          </a>
        </label>
        <label>
          <div>
            <FaWhatsapp className='social-icon' size={ICONSIZE}/>
            {links.phone}
          </div>
        </label>
        <label>
          <div>
            <MdEmail className='social-icon' size={ICONSIZE}/>
            {links.email}
          </div>
        </label>
      </div>
    </div>
    </div>
  )
}

export default Contacts