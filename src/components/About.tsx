import React from 'react';
import './About.css';
import PhotoCard from './PhotoCard';
import Perfil from '../assets/images/Foto_Perfil.jpg'

type Props = {}

function About({}: Props) {
  return (
    <div className='about-container' id='about'>
      <h2>- Sobre Mim -</h2>
      <div className='p-container right'>
        <p className='p1-text'>Formado em Engenharia Mecânica e sempre ligado em tecnologia, vi de perto a indústria automobilística, onde aprendi a lidar com novas soluções todos os dias para os mais variados obstáculos.</p>
        <PhotoCard content='Foto Perfil' isLeft={false} link={Perfil}/>
      </div>
      <div className='p-container left'>
        <PhotoCard content='Logos girando' isLeft={false} link={'Logos girando'}/>
        <p className='p2-text'>Como desenvolvedor web crio UI`s fluidas com a biblioteca React, atreladas ao Redux para gerenciamento global de estado.Páginas responsivas, Single Page Application, Mobile First, Metodologias Ágeis estão dentro da minha zona de conforto.</p>
      </div>
      <div className='p-container right'>
        <p className='p3-text'>A todo momento alimento minha curiosidade por tecnologia, o que me coloca em constante evolução.</p>
        <PhotoCard content='cérebro' isLeft={false} link={'cérebro'}/>
      </div>
    </div>
  )
}

export default About