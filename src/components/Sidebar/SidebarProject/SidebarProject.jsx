import { Title, TitleBox } from 'components/Typography';
import { Button, GoBack } from 'components/Buttons';
import { SidebarContent } from 'components/Sidebar';
import { TasksCollection } from 'components/Tasks';
import { AddTaskForm, ChangeProjectNameForm } from 'components/Forms';
import { CopyLink } from 'components/Forms';
import getPageInfoByUrl from 'utils/getPageInfoByUrl';
import { useAuth, useProject } from 'hooks';

const SidebarProject = () => {
  const { isLoggedIn, user } = useAuth();
  const { project, tasks } = useProject();
  const { host, subdomen } = getPageInfoByUrl(window.location.href);
  const isOwner = project?.owner?._id === user?._id || false;

  return (
    <>
      <SidebarContent>
        <GoBack />

        {isLoggedIn && isOwner ? (
          <ChangeProjectNameForm value={project.name} />
        ) : (
          <Title tag="h1" size="h2">
            {project.name}
          </Title>
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
