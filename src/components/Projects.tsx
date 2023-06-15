import React, { useEffect, useMemo, useState } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import Pagination from './Pagination';
import rawData from '../utils/data';
import { IProject } from '../Interface/Interface';
import Loader from './Loader';
import { useAppSelector, useAppDispatch } from '../redux/hooks/hooks';
import { setLoading } from '../redux/dataSlicer';
let PageSize = 2;

function Projects() {
  const dispatch = useAppDispatch();
  const load = useAppSelector(state=>state.data.load);
  const { projects } = rawData;
  const [currentPage, setCurrentPage] = useState(1);

  const currentProjects = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return projects.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, projects]);

  return (
    <div className='projects-container' id='projects'>
      <h2>- Projetos -</h2>
        {
          currentProjects.length > 0 && currentProjects.map((proj: IProject) => <ProjectCard  project={proj} key={proj.name}/>)
        }
        {
          projects.length > 0
          ? <Pagination 
            siblingCount={1}
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={projects.length}
            pageSize={PageSize}
            onPageChange={(page: React.SetStateAction<number>) => setCurrentPage(page)}
            />
          : ''
        }
    </div>
  )
}

export default Projects