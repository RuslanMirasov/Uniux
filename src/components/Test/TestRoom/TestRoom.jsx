import { StopButton } from 'components/Buttons';
import { useSearchParams } from 'react-router-dom';
import IFrame from 'components/IFrame/IFrame';
import { useEffect, useState } from 'react';
import css from './TestRoom.module.scss';
import Camera from 'components/Camera/Camera';

const TestRoom = ({ task, setStartTime, setEndTime, setIsCameraSaved }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [isCameraLoaded, setIsCameraLoaded] = useState(false);
  const [stopCameraRecord, setStopCameraRecord] = useState(false);
  const [startCameraRecord, setStartCameraRecord] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { proto, name, device, target } = task;

  useEffect(() => {
    if (isIframeLoaded && isCameraLoaded) {
      setStartTime(Number(new Date().getTime()));
      setStartCameraRecord(true);
    }
  }, [isIframeLoaded, isCameraLoaded, setStartTime]);

  useEffect(() => {
    const handleMessage = event => {
      const data = event.data;
      if (data && data.type === 'UNIUX_TARGET' && target === data.target) {
        setEndTime(Number(new Date().getTime()));
        setStopCameraRecord(true);
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
        <IFrame link={proto} name={name} device={device} setIsIframeLoaded={setIsIframeLoaded} />
      </div>
      <Camera
        setIsCameraLoaded={setIsCameraLoaded}
        stopCameraRecord={stopCameraRecord}
        startCameraRecord={startCameraRecord}
        setIsCameraSaved={setIsCameraSaved}
      />
      <StopButton setStopCameraRecord={setStopCameraRecord} />
    </>
  );
};

export default TestRoom;
