import { ProjectBody } from 'components/ProjectPage';
import { Sidebar } from 'components/Sidebar';
import { ProjectProvider } from 'hooks';

const Sessions = () => {
  return (
    <ProjectProvider>
      <Sidebar />
      <ProjectBody />
    </ProjectProvider>
  );
};

export default Sessions;
