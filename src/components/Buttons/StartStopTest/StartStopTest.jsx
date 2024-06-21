import { useLocation } from 'react-router-dom';
import { Button } from '..';

const StartStopTest = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const task = searchParams.get('task');
  const status = searchParams.get('status');
  return (
    <>
      {!status || status === 'done' || status === 'fail' ? (
        <Button to="?task=1&status=start" full>
          OK
        </Button>
      ) : (
        <Button variant="red" to="?task=1&status=fail" full>
          STOP TASK {task}
        </Button>
      )}
    </>
  );
};

export default StartStopTest;
