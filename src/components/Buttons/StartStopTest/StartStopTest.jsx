import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '..';

const StartStopTest = ({ tasks }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const task = searchParams.get('task');
  const status = searchParams.get('status');
  const [taskCurrent, setTaskCurrent] = useState(0);

  useEffect(() => {
    if (task) {
      setTaskCurrent(Number(task) - 1);
    }
  }, [task]);

  const handleStart = () => {
    if (taskCurrent < tasks.length) {
      navigate(`?task=${tasks[taskCurrent].number}&status=start`);
    }
  };

  const handleStop = () => {
    if (taskCurrent < tasks.length) {
      navigate(`?task=${taskCurrent + 1}&status=fail`);
      setTaskCurrent(taskCurrent + 1);
    }
  };

  return (
    <>
      {!status || status === 'done' || status === 'fail' ? (
        <Button onClick={handleStart} full>
          OK
        </Button>
      ) : (
        <Button variant="red" onClick={handleStop} full>
          Stop Task {task}
        </Button>
      )}
    </>
  );
};

export default StartStopTest;
