import Icon from 'components/Icon/Icon';
import { useEffect, useRef, useState } from 'react';
import css from './Camera.module.scss';

const Camera = () => {
  const [cameraVisibility, setCameraVisibility] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  // Функция для остановки видеопотока и записи
  const stopCamera = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    saveVideo();
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

        // Создание MediaRecorder для записи
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = event => {
          if (event.data.size > 0) {
            setRecordedChunks(prev => [...prev, event.data]);
          }
        };
        mediaRecorderRef.current.start();
      });

    return () => {
      stopCamera();
    };
  }, []);

  // Функция для сохранения записанного видео
  const saveVideo = () => {
    const blob = new Blob(recordedChunks, {
      type: 'video/webm',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = url;
    a.download = 'recorded_video.webm';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className={`${css.Camera} ${!cameraVisibility && css.Hidden} ${isLoading && 'loading'}`}>
      <video playsInline muted autoPlay className={css.Video} ref={videoRef}></video>
      <button size="small" className={css.HideCamera} onClick={() => setCameraVisibility(false)}>
        <Icon name="fail" size="18" />
      </button>
      <div className={css.StopCamera} onClick={stopCamera}>
        Stop Camera
      </div>
    </div>
  );
};

export default Camera;
