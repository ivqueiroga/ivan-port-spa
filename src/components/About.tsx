import React from 'react';
import './About.css';

type Props = {}

function About({}: Props) {
  return (
    <div className='about-container' id='about'>
      <h2>Sobre Mim</h2>
      <div className='p1-container'>
        <p className='p1-img'></p>
        <p className='p1-text'>De BH para o mundo!</p>
      </div>
      <div className='p2-container'>
        <p className='p2-img'></p>
        <p className='p2-text'>Formado em Engenharia Mecânica e sempre ligado em tecnologia, vi de perto a indústria automobilística, onde aprendi a lidar com novas soluções todos os dias para os mais variados obstáculos.</p>
      </div>
      <div className='p3-container'>
        <p className='p3-img'></p>
        <p className='p3-text'>Como desenvolvedor web, utilizo HTML/CSS/JavaScript. Com a biblioteca React crio UI`s fluidas utilizando o Redux para gerenciamento global de estado.</p>
      </div>
      <div className='p4-container'>
        <p className='p4-img'></p>
        <p className='p4-text'>Páginas responsivas, Single Page Application, Mobile First, Metodologias Ágeis estão dentro da minha zona de conforto.</p>
      </div>
      <div className='p5-container'>
        <p className='p5-img'></p>
        <p className='p5-text'>A todo momento alimento minha curiosidade por tecnologia, o que me coloca em constante evolução.</p>
      </div>
    </div>
  )
}

export default About