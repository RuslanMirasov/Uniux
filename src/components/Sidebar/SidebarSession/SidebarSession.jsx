import { SidebarContent } from '..';
import { useProject } from 'hooks';
import { Title, TitleBox } from 'components/Typography';
import getPageInfoByUrl from 'utils/getPageInfoByUrl';
import { CopyLink } from 'components/Forms';
import { GoBack } from 'components/Buttons';
import { SessionCollection, SessionNavigation, SessionSection } from 'components/Session';
import { TaskMarker } from 'components/Tasks';
import { TestStatistic } from 'components/Test';

const SidebarSession = () => {
  const { project, tasks } = useProject();
  const { host, subdomen } = getPageInfoByUrl(window.location.href);

  return (
    <>
      <SidebarContent>
        <TitleBox>
          <TaskMarker status="done" number="1" position="absolute" />
          <GoBack to={`${host}${subdomen}/project/${project._id}`} />
        </TitleBox>

        <Title tag="h1" size="h2">
          {project.name}
        </Title>

        {tasks.length > 0 && <SessionNavigation tasks={tasks} />}

        <CopyLink value={`${host}${subdomen}/sessions/${project._id}`} />

        <SessionSection title="Statistic">
          <TestStatistic />
        </SessionSection>

        <SessionSection title="Sessions">
          <SessionCollection />
        </SessionSection>
      </SidebarContent>
    </>
  );
};

export default SidebarSession;
