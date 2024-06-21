import { ProjectBody } from 'components/ProjectPage';
import { Sidebar } from 'components/Sidebar';
import { ProjectProvider } from 'hooks';

const Project = () => {
  return (
    <ProjectProvider>
      <Sidebar />
      <ProjectBody />
    </ProjectProvider>
  );
};

export default Project;
