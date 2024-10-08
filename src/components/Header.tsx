import React from 'react';
import Navbar from './Navbar';
import './Header.css';
import Button from './Button';
import { BiDownload } from 'react-icons/bi';
import cv from '../assets/docs/Ivan-CV-Software-Engineer.pdf';

export default function Header() {
  return (
    <div className='header-container' id='main'>
      <Navbar />
      <div className='main'>
        <h3 className='main-content'>Olá, me chamo</h3>
        <h1 className='main-content'>Ivan Queiroga</h1>
        <h2 className='main-content'>Desenvolvedor de Software e Engenheiro Mecânico</h2>
        <p className='main-content'>Desenvolvedor web que utiliza JavaScript e bibliotecas React e Redux/Redux RTK. Familiarizado com TypeScript, bancos de dados relacionais e Métodos Ágeis.</p>
      </div>
      <div className='main-btn-container'>
        <Button isLeft={true} link='contacts' content='Contato' highlight={true} thereIsDownload={false}/>
        <Button isLeft={false} link={cv} download={'Ivan-CV-Software-Engineer.pdf'} content='Currículo' highlight={false} thereIsDownload={true} icon={<BiDownload size={15}/>}/>
      </div>
    </div>
  )
}
