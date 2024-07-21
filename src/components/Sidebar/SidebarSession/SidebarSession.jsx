import { SidebarContent } from '..';
import { useProject } from 'hooks';
import { useSearchParams } from 'react-router-dom';
import { Title, Text, TitleBox } from 'components/Typography';
import getPageInfoByUrl from 'utils/getPageInfoByUrl';
import { CopyLink } from 'components/Forms';
import { GoBack } from 'components/Buttons';
import { SessionCollection, SessionNavigation, SessionSection, SessionTaskCollection } from 'components/Session';
import { TaskMarker } from 'components/Tasks';
import { TestStatistic } from 'components/Test';
import { useEffect, useState } from 'react';

const SidebarSession = () => {
  const { project, tasks, sessions } = useProject();
  const { host, subdomen } = getPageInfoByUrl(window.location.href);
  const [searchParams] = useSearchParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const task_number = searchParams.get('task');
    if (!task_number) {
      setTask(null);
      return;
    }
    const currentTask = tasks.find(task => task.number === Number(task_number));
    setTask(currentTask);
    console.log(task);
  }, [searchParams, tasks, task]);

  return (
    <>
      <SidebarContent>
        <TitleBox>
          <TaskMarker status="done" number="1" position="absolute" />
          <GoBack to={task ? `${host}${subdomen}/sessions/${project._id}` : `${host}${subdomen}/project/${project._id}`} />
        </TitleBox>
        <TitleBox>
          <Title tag="h1" size="h2">
            {!task ? project.name : task.name}
          </Title>
          {task && task.description && (
            <Text color="grey" size="big">
              {task.description}
            </Text>
          )}
        </TitleBox>

        {!task && tasks.length > 0 && <SessionNavigation tasks={tasks} />}

        {!task && <CopyLink value={`${host}${subdomen}/sessions/${project._id}`} />}

        <SessionSection title="Statistic">
          <TestStatistic data={sessions} task={task} />
        </SessionSection>
        <SessionSection title="Sessions">{task ? <SessionTaskCollection number={task.number} /> : <SessionCollection />}</SessionSection>
      </SidebarContent>
    </>
  );
};

export default SidebarSession;
