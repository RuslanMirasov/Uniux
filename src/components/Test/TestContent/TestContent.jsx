import css from './TestContent.module.scss';
import { useAuth, useProject } from 'hooks';
import { Button } from 'components/Buttons';
import { TaskDescription, TaskDone } from 'components/Tasks';
import Image from 'components/Image/Image';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TestRoom, TestSave, TestWelcome } from 'components/Test';
import { updateSession } from 'utils/updateSession';

const TestContent = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isTestDone, setIsTestDone] = useState(false);
  const [isCameraSaved, setIsCameraSaved] = useState(false);
  const [isVideoSaved] = useState(true);
  const { project, tasks } = useProject();
  const { user, isLoggedIn } = useAuth();
  const { name, thumbnail } = project;
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [status, setStatus] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [btnText, setBtnText] = useState('Start Test');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const existingResult = JSON.parse(localStorage.getItem('session'));
    if (!existingResult) {
      localStorage.setItem('session', JSON.stringify({}));
    }
  }, []);

  useEffect(() => {
    updateSession('startTime', startTime);
  }, [startTime]);

  useEffect(() => {
    updateSession('endTime', endTime);
  }, [endTime]);

  useEffect(() => {
    updateSession('project', project._id);
  }, [project]);

  useEffect(() => {
    const sessionUser = {};
    if (isLoggedIn) {
      sessionUser['email'] = user.email;
      sessionUser['avatarUrl'] = user.avatarUrl;
    }
    updateSession('user', sessionUser);
  }, [user, isLoggedIn]);

  useEffect(() => {
    const sessionTask = {
      id: tasks[currentTaskIndex]?._id,
      number: tasks[currentTaskIndex]?.number,
      name: tasks[currentTaskIndex]?.name,
      device: tasks[currentTaskIndex]?.device,
      description: tasks[currentTaskIndex]?.description,
    };
    updateSession('task', sessionTask);
  }, [tasks, currentTaskIndex]);

  useEffect(() => {
    updateSession('status', status);
    switch (status) {
      case 'pause':
        setBtnText('К заданию');
        updateSession('camera', '');
        setIsCameraSaved(false);
        break;
      case 'done':
      case 'fail':
        setBtnText('Следующее задание');
        break;
      case 'end':
        setBtnText('Посмотреть результаты');
        break;
      default:
        setBtnText('Start Test');
    }
  }, [status]);

  useEffect(() => {
    if (tasks.length > 0) {
      const taskNumber = searchParams.get('task');
      const taskStatus = searchParams.get('status');

      if (taskNumber && taskStatus) {
        const taskIndex = tasks.findIndex(task => task.number.toString() === taskNumber);
        if (taskIndex !== -1) {
          setCurrentTaskIndex(taskIndex);
          setStatus(taskStatus);
        }
      }

      if (tasks.length === Number(taskNumber) && (status === 'done' || status === 'fail')) {
        setBtnText('Посмотреть результаты');
        setIsTestDone(true);
        setIsButtonDisabled(true);
      }
    }
  }, [tasks, searchParams, status, user.email]);

  const updateURL = (taskIndex, status) => {
    const taskNumber = tasks[taskIndex].number;
    setSearchParams({ task: taskNumber, status });
  };

  const handleSteps = () => {
    if (tasks.length === 0) return;
    if (isTestDone) {
      navigate('/');
      return;
    }
    let newStatus;
    let nextTaskIndex = currentTaskIndex;
    switch (status) {
      case 'pause':
        newStatus = 'start';
        break;
      case 'done':
      case 'fail':
        if (currentTaskIndex === tasks.length - 1) {
          return;
        }
        nextTaskIndex = (currentTaskIndex + 1) % tasks.length;
        setCurrentTaskIndex(nextTaskIndex);
        newStatus = 'pause';
        break;
      default:
        newStatus = 'pause';
    }

    setStatus(newStatus);
    updateURL(nextTaskIndex, newStatus);
  };

  return status !== 'start' ? (
    <div className={css.TestContent}>
      <div className={css.Top}>
        <div className={css.Thumbnail}>
          <Image src={thumbnail} alt={name} />
        </div>
        {!status && <TestWelcome setIsButtonDisabled={setIsButtonDisabled} />}
        {status === 'pause' && <TaskDescription task={tasks[currentTaskIndex]} />}
        {(status === 'done' || status === 'fail') && (
          <>
            <TaskDone status={status} />
            <TestSave setIsButtonDisabled={setIsButtonDisabled} isTestDone={isTestDone} isCameraSaved={isCameraSaved} isVideoSaved={isVideoSaved} />
          </>
        )}
      </div>

      <div className={css.Bottom}>
        <Button full disabled={isButtonDisabled} onClick={handleSteps}>
          {btnText}
        </Button>
      </div>
    </div>
  ) : (
    <TestRoom task={tasks[currentTaskIndex]} setStartTime={setStartTime} setEndTime={setEndTime} setIsCameraSaved={setIsCameraSaved} />
  );
};

export default TestContent;
