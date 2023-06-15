import React from 'react';
import './ProjectCard.css';
import {DiGithubBadge} from 'react-icons/di';
import {FaYoutube} from 'react-icons/fa';
import {TbWorldWww} from 'react-icons/tb';
import { IProject } from '../Interface/Interface';
const SIZE = 20;

type Props = {
  project: IProject
}

function ProjectCard({project}: Props) {
  const { name, photoPath, genre, languages, description, link   } = project;
  return (
    <div className='ProjectCard'>
      <div className='pCard-container' >
        <img src={photoPath} alt={name} />
        <div className='pInfo-container'>
          <div className='pTitle-container'>
            <h3>{name}</h3>
            <p>{genre}</p>
          </div>
          <div className='pContent-container'>
            <p className='pDescription' >{description}</p>
            <div className='pLanguages'>{languages.map(lang => <p key={lang}>{lang}</p>)}</div>
          </div>
        </div>
        {/* <div className='status-container'>
          <p>{status}</p>
        </div> */}
      </div>
      <div className='project-link-container'>
        {link.github  && <a href={link.github} target='_blank' rel='noreferrer' className='gitHub'>GitHub <DiGithubBadge size={SIZE} /></a>}
        {link.webpage  && <a href={link.webpage} target='_blank' rel='noreferrer' className='webPage'>Webpage <TbWorldWww size={SIZE}/></a>}
        {link.youtube  && <a href={link.youtube} target='_blank' rel='noreferrer' className='youTube'>YouTube <FaYoutube size={SIZE}/></a>}
      </div>
    </div>
  )
}

export default ProjectCard