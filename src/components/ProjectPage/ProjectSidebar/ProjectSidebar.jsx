import { Title } from 'components/Typography';
import { Button, GoBack, StartStopTest } from 'components/Buttons';
import { ProjectSidebarContent } from 'components/ProjectPage';
import { useAuth } from 'hooks';
import css from './ProjectSidebar.module.scss';
import { useState, useEffect } from 'react';
import { TasksWrapper } from 'components/Tasks';
import { CopyLink } from 'components/Forms';
import { InputCheckbox } from 'components/Forms/InputTypes';
import getTestUrl from 'utils/getTestUrl';

const ProjectSidebar = ({ project = {} }) => {
  const { _id, name, owner } = project;
  const { user, isLoggedIn } = useAuth();
  const [isOwner, setIsOwner] = useState(false);
  const [hasTasks, setHasTasks] = useState(true);

  const isTestStarted = window.location.href.includes('/test/');
  const testUrl = getTestUrl(_id);

  useEffect(() => {
    if (owner) {
      setIsOwner(user._id === owner._id);
    }
  }, [owner, user._id]);

  return (
    <aside className={`${css.ProjectSidebar} custom-scrollbar`}>
      <ProjectSidebarContent>
        {isLoggedIn && !isTestStarted && <GoBack />}

        {isTestStarted && <InputCheckbox type="checkbox" name="test_start" label="&nbsp;" value="ok" checked readOnly />}

        {isTestStarted && (
          <Title tag="h2" size="h2">
            Your test is start
          </Title>
        )}

        <Title tag="h1" size={isTestStarted ? 'h4' : 'h2'}>
          {name}
        </Title>

        {isLoggedIn && isOwner && <TasksWrapper project={project} setHasTasks={setHasTasks} />}

        {isTestStarted && <CopyLink value={testUrl} />}
      </ProjectSidebarContent>

      <ProjectSidebarContent>
        {!isTestStarted ? (
          <Button to={testUrl} full disabled={!hasTasks}>
            Start test
          </Button>
        ) : (
          <StartStopTest />
        )}
      </ProjectSidebarContent>
    </aside>
  );
};

export default ProjectSidebar;
