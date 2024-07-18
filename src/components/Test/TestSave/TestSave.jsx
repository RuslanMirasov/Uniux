import Icon from 'components/Icon/Icon';
import { Text, Title } from 'components/Typography';
import { useEffect, useState } from 'react';
import { sessionsOperations } from 'api';
import css from './TestSave.module.scss';

const TestSave = ({ setIsButtonDisabled, isTestDone, isCameraSaved, isVideoSaved }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isCameraSaved && isVideoSaved) {
      saveTaskToBase();
    }
  }, [isCameraSaved, isVideoSaved]);

  useEffect(() => {
    setIsButtonDisabled(isLoading);
  }, [isLoading, setIsButtonDisabled]);

  const saveTaskToBase = async () => {
    const sesssion = JSON.parse(localStorage.getItem('session'));
    const duration = Number(sesssion.endTime) - Number(sesssion.startTime);
    const data = {
      duration,
      user: sesssion.user,
      task: sesssion.task,
      status: sesssion.status,
      video: null,
      camera: sesssion.camera,
      project: sesssion.project,
    };
    try {
      await sessionsOperations.addNew(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${css.TestSave} ${isLoading && css.Saving}`}>
      {isLoading && (
        <>
          <Title tag="h3" size="h6">
            Сохранение результатов...
          </Title>
        </>
      )}
      {isTestDone && !isLoading && (
        <>
          <Icon name="confirm" color="var(--green)" />
          <Title tag="h1" size="h2">
            Тест завершён
          </Title>
          <Text size="big" color="grey">
            Перейдите по ссылке ниже чтобы посмотреть результаты теста.
          </Text>
        </>
      )}
    </div>
  );
};

export default TestSave;
