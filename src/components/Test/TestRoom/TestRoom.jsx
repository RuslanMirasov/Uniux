import { StopButton } from 'components/Buttons';
import { useSearchParams } from 'react-router-dom';
import IFrame from 'components/IFrame/IFrame';
import { useEffect } from 'react';
import css from './TestRoom.module.scss';
import Camera from 'components/Camera/Camera';

const TestRoom = ({ task, setStartTime, setEndTime }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { proto, name, device, target } = task;

  useEffect(() => {
    const handleMessage = event => {
      const data = event.data;
      if (data && data.type === 'UNIUX_TARGET' && target === data.target) {
        const end = new Date().getTime();
        setEndTime(end);
        const taskNumber = searchParams.get('task');
        setSearchParams({ task: taskNumber, status: 'done' });
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [setEndTime, target, searchParams, setSearchParams]);

  return (
    <>
      <div className={`${css.TestRoom} ${device === 'app' && css.Scrollbar && 'custom-scrollbar'}`}>
        <IFrame link={proto} name={name} device={device} setStartTime={setStartTime} />
      </div>
      <Camera />
      <StopButton />
    </>
  );
};

export default TestRoom;
