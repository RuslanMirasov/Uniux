import { ProjectBody, ProjectSidebar } from 'components/ProjectPage';
import { ProjectProvider } from 'hooks';

const Project = () => {
  return (
    <ProjectProvider>
      <ProjectSidebar />
      <ProjectBody />
    </ProjectProvider>
  );
};

export default Project;
