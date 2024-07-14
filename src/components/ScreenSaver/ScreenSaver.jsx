import { useRef, useState } from 'react';
import css from './ScreenSaver.module.scss';

const ScreenSaver = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const mediaRecorderRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          cursor: 'always',
        },
        audio: false,
      });
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp8',
        videoBitsPerSecond: 2500000,
      });
      mediaRecorderRef.current.ondataavailable = handleDataAvailable;
      mediaRecorderRef.current.onstop = handleStop;
      mediaRecorderRef.current.start();
      setIsRecording(true);
      console.log('Recording started');
    } catch (err) {
      console.error('Error: ' + err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      console.log('Recording stopped');
    }
  };

  const handleDataAvailable = event => {
    if (event.data.size > 0) {
      console.log('Data available:', event.data.size);
      setRecordedChunks(prev => [...prev, event.data]);
    }
  };

  const handleStop = () => {
    console.log('Recorder stopped');
    // Убедимся, что данные были записаны перед вызовом saveRecording
    if (recordedChunks.length > 0) {
      saveRecording();
    } else {
      console.warn('No recorded chunks found.');
    }
  };

  const saveRecording = () => {
    console.log('Saving recording, chunks:', recordedChunks.length);
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    console.log('Blob created:', blob.size);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = url;
    a.download = 'recorded_iframe.webm';
    setTimeout(() => {
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
      console.log('Recording saved');
    }, 5000);
  };

  return (
    <div className={css.ScreenRecorder}>
      <button onClick={isRecording ? stopRecording : startRecording}>{isRecording ? 'Stop Recording' : 'Start Recording'}</button>
    </div>
  );
};

export default ScreenSaver;
