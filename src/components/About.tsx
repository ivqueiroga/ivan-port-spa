import React from 'react';
import './About.css';
import PhotoCard from './PhotoCard';
import Perfil from '../assets/Foto_Perfil.jpg'

type Props = {}

function About({}: Props) {
  return (
    <div className='about-container' id='about'>
      <h2>- Sobre Mim -</h2>
      <div className='p-container'>
        <div style={{display: 'flex', flexDirection: 'column', paddingRight: '2%'}}>
          <p className='p2-text'>Formado em Engenharia Mecânica e sempre ligado em tecnologia, vi de perto a indústria automobilística, onde aprendi a lidar com novas soluções todos os dias para os mais variados obstáculos.</p>
        </div>
        <PhotoCard content='Foto Perfil' isLeft={false} link={Perfil}/>
      </div>
      <div className='p-container'>
        <PhotoCard content='Logos girando' isLeft={false} link={'Logos girando'}/>
        <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '2%'}}>
          <p className='p3-text'>Como desenvolvedor web, com a biblioteca React, crio UI`s fluidas atreladas ao Redux para gerenciamento global de estado.Páginas responsivas, Single Page Application, Mobile First, Metodologias Ágeis estão dentro da minha zona de conforto.</p>
        </div>
      </div>
      <div className='p-container'>
        <p style={{paddingRight: '2%'}} className='p5-text'>A todo momento alimento minha curiosidade por tecnologia, o que me coloca em constante evolução.</p>
        <PhotoCard content='cérebro' isLeft={false} link={'cérebro'}/>
      </div>
    </div>
  )
}

export default About