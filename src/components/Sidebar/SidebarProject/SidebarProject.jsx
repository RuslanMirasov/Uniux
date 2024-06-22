import { Title, TitleBox } from 'components/Typography';
import { Button, GoBack } from 'components/Buttons';
import { SidebarContent } from 'components/Sidebar';
import { TasksCollection } from 'components/Tasks';
import { AddTaskForm } from 'components/Forms';
import { useProject } from 'hooks';

const SidebarProject = () => {
  const { project, tasks } = useProject();

  return (
    <>
      <SidebarContent>
        <GoBack />

        <Title tag="h1" size="h2">
          {project.name}
        </Title>

        {tasks.length > 0 && <TasksCollection tasks={tasks} />}

        <AddTaskForm />
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
