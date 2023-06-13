import React from 'react';
import Logo_IVQUEIROGA from '../assets/images/static_logo.png';
import './Loader.css';

function Loader() {
  return (
    <div className='loading'>
      <img src={Logo_IVQUEIROGA} alt='Carregando...'></img>
      <div className='spinner-container'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader