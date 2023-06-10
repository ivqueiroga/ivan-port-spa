import React from 'react';
import {Link} from 'react-scroll';
import './Navbar.css';
import logo from '../assets/Logo.png'

type Props = {}

export default function Navbar({}: Props) {
  return (
      <nav className='nav-container'>
        <Link to='main' className='logo'>
          <img src={logo} alt='logo' width={40} />
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn'>
          <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
          <li><Link to='main' className='active'>Home</Link></li>
          <li><Link to='about'>Sobre Mim</Link></li>
          <li><Link to='skills'>Habilidades</Link></li>
          <li><Link to='projects'>Projetos</Link></li>
          <li><Link to='contacts'>Contato</Link></li>
        </ul>
      </nav>
  )
}