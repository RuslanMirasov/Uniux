import { useSearchParams } from 'react-router-dom';
import css from './StopButton.module.scss';

const StopButton = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handelClick = () => {
    const taskNumber = searchParams.get('task');
    setSearchParams({ task: taskNumber, status: 'fail' });
  };

  return (
    <button type="button" className={css.StopButton} onClick={handelClick}>
      <span>Stop</span>
    </button>
  );
};

export default StopButton;
