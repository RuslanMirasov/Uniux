import { projectOperation } from 'api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProjectSingle, ProjectsNotFound } from 'components/Projects';
import css from './ProjectsCollection.module.scss';
import { Button } from 'components/Buttons';

const ProjectsCollection = () => {
  const [projects, setProjects] = useState([]);
  const [projectsCount, setProjectsCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();

  const limit = 9;
  const searchQuery = searchParams.get('q') || '';
  const sort = searchParams.get('sort') || '';

  useEffect(() => {
    setPage(1);
    setProjects([]);
  }, [searchQuery, sort]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const allProjects = await projectOperation.getAll(page, limit, searchQuery, sort);
        page === 1 ? setProjects(allProjects) : setProjects(prev => [...prev, ...allProjects]);
        setProjectsCount(allProjects.length);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [page, searchQuery, sort]);

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      {projects.length === 0 && searchQuery && <ProjectsNotFound text="No project matching" query={searchQuery} />}
      <ul className={css.ProjectsCollection}>
        {projects.map(project => (
          <ProjectSingle key={project._id} project={project} />
        ))}
      </ul>
      {projectsCount === limit && projects.length !== 0 && (
        <div className={css.LoadMore}>
          <Button variant="border" isLoading={loading} onClick={nextPage}>
            Load more projects
          </Button>
        </div>
      )}
    </>
  );
};

export default ProjectsCollection;
