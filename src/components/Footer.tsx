import React from 'react';
import './Footer.css';

type Props = {}

function Footer({}: Props) {
  return (
    <div className='footer-container'>
      <p>Ivan Queiroga</p>
      <p>Todos os direitos reservados</p>
      <p>React & React Redux RTK</p>
    </div>
  )
}

export default Footer