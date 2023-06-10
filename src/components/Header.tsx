import React from 'react';
import Navbar from './Navbar';
import './Header.css';
import Button from './Button';

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='header-container' id='main'>
      <Navbar />
      <div className='main'>
        <h3 className='main-content'>Olá, me chamo</h3>
        <h1 className='main-content'>Ivan Queiroga</h1>
        <h2 className='main-content'>Sou Engenheiro de Software e Engenheiro Mecânico</h2>
        <p className='main-content'>Desenvolvedor web que utiliza JavaScript com bibliotecas React e Redux/Redux RTK. Familiarizado com TypeScript, bancos de dados relacionais e Métodos Ágeis.</p>
      </div>
      <div className='main-btn-container'>
        <Button isLeft={true} content='Contato' highlight={true} />
        <Button isLeft={false} content='Currículo' highlight={false} />
      </div>
    </div>
  )
}