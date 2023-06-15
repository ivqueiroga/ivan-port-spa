import React, {useState} from 'react';
import {Link} from 'react-scroll';
import './Navbar.css';
import logo from '../assets/images/Logo.png';
import {VscThreeBars, VscClose} from 'react-icons/vsc';

export default function Navbar() {
  const [navIcon, setNavIcon] = useState(false);

  const navHandler = () => {
    setNavIcon(!navIcon);
  }

  const pageReloader = () => {
    const reset =  window.location.reload();
    return reset;
  }

  return (
      <nav className='nav-container'>
        <button 
          onClick={pageReloader}
          className='logo'>
          <img src={logo} alt='logo' width={40} />
        </button>
        <ul className={navIcon ? 'menu-active' : 'menu'}>
          <li className='navbar-li'>
            <Link 
              to='main'
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavIcon(false)}
            >
              Home
            </Link>
          </li>
          <li className='navbar-li'>
            <Link 
              to='about'
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavIcon(false)}
            >
              Sobre Mim
            </Link>
          </li>
          <li className='navbar-li'>
            <Link 
              to='skills'
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavIcon(false)}
            >
              Habilidades
            </Link>
          </li>
          <li className='navbar-li'>
            <Link
              to='projects'
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavIcon(false)}
            >
              Projetos
            </Link>
          </li>
          <li className='navbar-li'>
            <Link
              to='contacts'
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavIcon(false)}
            >
              Contato
            </Link>
          </li>
        </ul>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' htmlFor='menu-btn'>
          <span onClick={navHandler} className='nav-icon'>{navIcon ? <VscClose size={40}/>: <VscThreeBars size={40} />}</span>
        </label>
      </nav>
  )
}