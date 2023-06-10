import React from 'react';
import {Link} from 'react-scroll';
import './Navbar.css';
import logo from '../assets/Logo.png'

type Props = {}

const pageReloader = () => {
  const reset =  window.location.reload();
  return reset;
}

export default function Navbar({}: Props) {
  return (
      <nav className='nav-container'>
        <button 
          onClick={pageReloader}
          className='logo'>
          <img src={logo} alt='logo' width={40} />
        </button>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn'>
          <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
          <li>
            <Link 
              to='main'
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-200}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to='about'
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-200}
              duration={500}
            >
              Sobre Mim
            </Link>
          </li>
          <li>
            <Link 
              to='skills'
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-200}
              duration={500}
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              to='projects'
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-200}
              duration={500}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              to='contacts'
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-200}
              duration={500}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
  )
}