import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import './Home.css';

type Props = {}

export default function Home({}: Props) {
  return (
    <div className='home-container'>
      <Header />
      <About />
    </div>
  )
}