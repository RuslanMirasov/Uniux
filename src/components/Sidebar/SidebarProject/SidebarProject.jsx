import { Title, TitleBox } from 'components/Typography';
import { Button, GoBack } from 'components/Buttons';
import { SidebarContent } from 'components/Sidebar';
import { TasksWrapper } from 'components/Tasks';
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

        <TasksWrapper project={project} />
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
