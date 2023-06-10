import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';
import './Home.css';

type Props = {}

export default function Home({}: Props) {
  return (
    <div className='home-container'>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  )
}