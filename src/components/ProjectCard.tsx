import React from 'react';
import './ProjectCard.css';
import rawData from '../utils/data';
import {DiGithubBadge} from 'react-icons/di';
import {TbWorldWww} from 'react-icons/tb';
import { IProject } from '../Interface/Interface';

type Props = {
  project: IProject
}

function ProjectCard({project}: Props) {
  const { name, photoPath, genre, languages, status, description, link   } = project;
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
            <p className='pLanguages'>{languages}</p>
          </div>
        </div>
        {/* <div className='status-container'>
          <p>{status}</p>
        </div> */}
      </div>
      <div className='project-link-container'>
        <a href={link.github} target='_blank' rel='noreferrer' className='gitHub'>GitHub <DiGithubBadge /></a>
        {link.webpage  && <a href={link.webpage} target='_blank' rel='noreferrer' className='webPage'>Webpage <TbWorldWww /></a>}
      </div>
    </div>
  )
}

export default ProjectCard