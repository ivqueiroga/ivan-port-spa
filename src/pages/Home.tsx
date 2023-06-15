import React, {} from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import './Home.css';

export default function Home() {

  return (
  <div className='home-container'>
    <Header />
    <About />
    <Skills />
    <Projects />
    <Contacts />
    <Footer />
  </div>
  )
}