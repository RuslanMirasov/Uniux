import { Title, TitleBox } from 'components/Typography';
import { Button, ButtonsList, GoBack } from 'components/Buttons';
import { SidebarContent } from 'components/Sidebar';
import { TasksCollection } from 'components/Tasks';
import { AddTaskForm, ChangeProjectNameForm } from 'components/Forms';
import { CopyLink } from 'components/Forms';
import getPageInfoByUrl from 'utils/getPageInfoByUrl';
import { useAuth, useProject } from 'hooks';

const SidebarProject = () => {
  const { isLoggedIn, user } = useAuth();
  const { project, tasks, sessions } = useProject();
  const { host, subdomen } = getPageInfoByUrl(window.location.href);
  const isOwner = project?.owner?._id === user?._id || false;

  return (
    <>
      <SidebarContent>
        <GoBack to="/" />

        {isLoggedIn && isOwner ? (
          <ChangeProjectNameForm value={project.name} />
        ) : (
          <Title tag="h1" size="h2">
            {project.name}
          </Title>
        )}

        {sessions?.length > 0 && (
          <ButtonsList>
            <Button to={`${host}${subdomen}/sessions/${project._id}`} size="small" variant="border">
              Export session
            </Button>
            <Button size="small">Share</Button>
          </ButtonsList>
        )}

        {tasks.length > 0 && <TasksCollection tasks={tasks} />}

        {isLoggedIn && isOwner && <AddTaskForm />}

        <CopyLink value={`${host}${subdomen}/test/${project._id}`} />
      </SidebarContent>

      <SidebarContent>
        <TitleBox className={tasks.length === 0 && 'disabled'}>
          <Button to={`/test/${project._id}`} full>
            Start test
          </Button>
        </TitleBox>
      </SidebarContent>
    </>
  );
};

export default SidebarProject;
