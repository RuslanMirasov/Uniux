import { Button } from 'components/Buttons';
import Icon from 'components/Icon/Icon';
import { useEffect, useRef, useState } from 'react';
import css from './Camera.module.scss';

const Camera = () => {
  const [cameraVisibility, setCameraVisibility] = useState(true);
  const [cameraError, setCameraError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: true,
      })
      .then(stream => {
        streamRef.current = stream;
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => videoRef.current.play();
        setIsLoading(false);
      })
      .catch(error => {
        setCameraError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={`${css.Camera} ${!cameraVisibility && css.Hidden}`}>
      <div className={`${isLoading && 'loading'}`}>
        <video playsInline muted autoPlay className={css.Video} ref={videoRef}></video>
        {cameraError && (
          <span>
            <Icon name="error" size="40" color="#ff4f4f" /> {cameraError}
          </span>
        )}
        <button size="small" className={css.HideCamera} onClick={() => setCameraVisibility(false)}>
          <Icon name="fail" size="18" />
        </button>
      </div>
      <Button onClick={stopCamera} full size="small">
        Stop Camera
      </Button>
    </div>
  );
};

export default Camera;
