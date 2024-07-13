import css from './TestContent.module.scss';
import { useAuth, useProject } from 'hooks';
import { Button } from 'components/Buttons';
import { TaskDescription, TaskDone } from 'components/Tasks';
import Image from 'components/Image/Image';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TestRoom, TestSave, TestWelcome } from 'components/Test';

const TestContent = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { project, tasks } = useProject();
  const { user, isLoggedIn } = useAuth();
  const { name, thumbnail } = project;
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [status, setStatus] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [btnText, setBtnText] = useState('Start Test');
  const [saveResults, setSaveResults] = useState(false);
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
    const existingResult = JSON.parse(localStorage.getItem('session'));
    if (existingResult && startTime) {
      existingResult['startTime'] = startTime;
      localStorage.setItem('session', JSON.stringify(existingResult));
    }
  }, [startTime]);

  useEffect(() => {
    const existingResult = JSON.parse(localStorage.getItem('session'));
    if (existingResult) {
      existingResult['endTime'] = endTime;
      localStorage.setItem('session', JSON.stringify(existingResult));
    }
  }, [endTime]);

  useEffect(() => {
    const existingResult = JSON.parse(localStorage.getItem('session'));
    if (!existingResult['project'] || existingResult['project'] !== project._id) {
      existingResult['project'] = project._id;
      localStorage.setItem('session', JSON.stringify(existingResult));
    }
  }, [project]);

  useEffect(() => {
    const existingResult = JSON.parse(localStorage.getItem('session'));
    if (existingResult) {
      existingResult['status'] = status;
      localStorage.setItem('session', JSON.stringify(existingResult));
    }
  }, [status]);

  useEffect(() => {
    const existingResult = JSON.parse(localStorage.getItem('session'));
    if (isLoggedIn) {
      existingResult['user'] = {
        email: user.email,
        avatarUrl: user.avatarUrl,
      };
      localStorage.setItem('session', JSON.stringify(existingResult));
    }
  }, [user, isLoggedIn]);

  useEffect(() => {
    const existingResult = JSON.parse(localStorage.getItem('session'));
    console.log(tasks[currentTaskIndex]);
    existingResult['task'] = {
      id: tasks[currentTaskIndex]?._id,
      number: tasks[currentTaskIndex]?.number,
      name: tasks[currentTaskIndex]?.name,
      device: tasks[currentTaskIndex]?.device,
      description: tasks[currentTaskIndex]?.description,
    };
    localStorage.setItem('session', JSON.stringify(existingResult));
  }, [tasks, currentTaskIndex]);

  useEffect(() => {
    switch (status) {
      case 'pause':
        setBtnText('К заданию');
        setStartTime(null);
        setEndTime(null);
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
        setSaveResults(true);
        setIsButtonDisabled(true);
      }
    }
  }, [tasks, searchParams, status]);

  const updateURL = (taskIndex, status) => {
    const taskNumber = tasks[taskIndex].number;
    setSearchParams({ task: taskNumber, status });
  };

  const handleSteps = () => {
    if (tasks.length === 0) return;
    if (saveResults) {
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
        {(status === 'done' || status === 'fail') && <TaskDone status={status} setEndTime={setEndTime} />}
      </div>

      {saveResults && <TestSave setIsButtonDisabled={setIsButtonDisabled} />}

      <div className={css.Bottom}>
        <Button full disabled={isButtonDisabled} onClick={handleSteps}>
          {btnText}
        </Button>
      </div>
    </div>
  ) : (
    <TestRoom task={tasks[currentTaskIndex]} setStartTime={setStartTime} setEndTime={setEndTime} />
  );
};

export default TestContent;
