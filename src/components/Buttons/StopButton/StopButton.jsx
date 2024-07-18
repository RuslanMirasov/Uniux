import { useSearchParams } from 'react-router-dom';
import { updateSession } from 'utils/updateSession';
import css from './StopButton.module.scss';

const StopButton = ({ setStopCameraRecord }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handelClick = () => {
    const taskNumber = searchParams.get('task');
    setSearchParams({ task: taskNumber, status: 'fail' });
    setStopCameraRecord(true);
    updateSession('endTime', Number(new Date().getTime()));
  };

  return (
    <button type="button" className={css.StopButton} onClick={handelClick}>
      <span>Stop</span>
    </button>
  );
};

export default StopButton;
