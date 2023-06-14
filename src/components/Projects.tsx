import React, { useEffect, useState } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import rawData from '../utils/data';

function Projects() {
  const { projects } = rawData;
  const [projectList, setProjectList] = useState<any[]>([]);

  useEffect(() => {
    const arr: any = []
    projects?.map((project) => arr.push({...project, active: false}));
    setProjectList(arr);
  },[projects]);

  return (
    <div className='projects-container' id='projects'>
      <h2>- Projetos -</h2>
        {
          projectList.length > 0 && projectList.map((proj) => <ProjectCard  project={proj} key={proj.name}/>)
        }
    </div>
  )
}

export default Projects