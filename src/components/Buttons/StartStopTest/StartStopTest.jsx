import { useQuery } from 'hooks';
import { Button } from '..';

const StartStopTest = () => {
  const { task, status } = useQuery();

  return (
    <>
      {!status || status === 'done' || status === 'fail' ? (
        <Button to="?task=1&status=start" full>
          OK
        </Button>
      ) : (
        <Button variant="red" to="?task=1&status=fail" full>
          Stop Task {task}
        </Button>
      )}
    </>
  );
};

export default StartStopTest;
