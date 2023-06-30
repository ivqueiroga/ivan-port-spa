import React from 'react';
import './About.css';
import PhotoCard from './PhotoCard';
import Perfil from '../assets/images/Foto_Perfil.png'
import LogoSpinner from './LogoSpinner';

function About() {
  return (
    <div className='about-container' id='about'>
      <h2>- Sobre Mim -</h2>
      <div className='p1-container p-container right'>
        <p className='p1-text'>Formado em Engenharia Mecânica e sempre ligado em tecnologia, vi de perto a indústria automobilística, onde aprendi a lidar com novas soluções todos os dias para os mais variados obstáculos. Prestando manutenção em computadores, nunca perdi contato com tecnologia</p>
        <PhotoCard content='Foto Perfil' isLeft={false} link={Perfil}/>
      </div>
      <div className='p-container left'>
        <div className='logos-cont'>
          <LogoSpinner />
        </div>
        <p className='p2-text'>Como desenvolvedor web crio UI`s fluidas com a biblioteca React, atreladas ao Redux para gerenciamento global de estado.Páginas responsivas, Single Page Application, Mobile First, Metodologias Ágeis estão dentro da minha zona de conforto.</p>
      </div>
      <div className='p-container right'>
        <p className='p3-text'>A todo momento alimento minha curiosidade por tecnologia, o que me coloca em constante evolução.</p>
        {/* <PhotoCard content='cérebro' isLeft={false} link={'cérebro'}/> */}
      </div>
    </div>
  )
}

export default About