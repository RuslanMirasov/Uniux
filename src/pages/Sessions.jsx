import { SessionBody } from 'components/Session';
import { Sidebar } from 'components/Sidebar';
import { ProjectProvider } from 'hooks';

const Sessions = () => {
  return (
    <ProjectProvider>
      <Sidebar />
      <SessionBody />
    </ProjectProvider>
  );
};

export default Sessions;
