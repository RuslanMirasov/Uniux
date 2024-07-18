import SessionsOperations from 'api/SessionsOperations/SessionsOperations';
import Icon from 'components/Icon/Icon';
import { useEffect, useRef, useState } from 'react';
import { updateSession } from 'utils/updateSession';
import css from './Camera.module.scss';

const Camera = ({ setIsCameraLoaded, stopCameraRecord, startCameraRecord, setIsCameraSaved }) => {
  const [cameraVisibility, setCameraVisibility] = useState(true);
  const [cameraError, setCameraError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const chunksRef = useRef([]);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // ЗАГРУЗКА ФРОНТАЛЬНОЙ КАМЕРЫ
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: true,
      })
      .then(stream => {
        streamRef.current = stream;
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
        };
      })
      .catch(error => {
        setCameraError(error.message);
        const session = JSON.parse(localStorage.getItem('session')) || {};
        session.camera = null;
        localStorage.setItem('session', JSON.stringify(session));
      })
      .finally(() => {
        setIsLoading(false);
        setIsCameraLoaded(true);
      });
  }, [setIsCameraLoaded]);

  // НАЧИНАЕМ ЗАПИСЬ ФРОНТАЛЬНОЙ КАМЕРЫ
  useEffect(() => {
    if (startCameraRecord && streamRef.current) {
      const options = { mimeType: 'video/webm; codecs=vp9', videoBitsPerSecond: 2500000 };
      const mediaRecorderInstance = new MediaRecorder(streamRef.current, options);

      mediaRecorderInstance.ondataavailable = event => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorderInstance.start();
      setMediaRecorder(mediaRecorderInstance);
    }
  }, [startCameraRecord]);

  // ОСТАНАВЛИВАЕМ ЗАПИСЬ ФРОНТАЛЬНОЙ КАМЕРЫ
  useEffect(() => {
    if (stopCameraRecord && mediaRecorder) {
      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: 'video/webm' });
        chunksRef.current = [];

        // Отправка Blob на бекенд
        const formData = new FormData();
        formData.append('file', blob, `camera_${Number(new Date().getTime())}.webm`);
        try {
          const response = await SessionsOperations.uploadVideo(formData);
          updateSession('camera', response.camera);
        } catch (error) {
          updateSession('camera', null);
          console.error('Ошибка при загрузке файла камеры', error);
        } finally {
          setIsCameraSaved(true);
        }
      };

      mediaRecorder.stop();

      streamRef.current.getTracks().forEach(track => track.stop());
    }
  }, [stopCameraRecord, mediaRecorder, setIsCameraSaved]);

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
    </div>
  );
};

export default Camera;
