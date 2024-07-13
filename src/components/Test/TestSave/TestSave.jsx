import Icon from 'components/Icon/Icon';
import { Text, Title } from 'components/Typography';
import { useEffect, useState } from 'react';
import css from './TestSave.module.scss';

const TestSave = ({ setIsButtonDisabled }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(isLoading);
  }, [isLoading, setIsButtonDisabled]);

  const handleClick = () => {
    setIsLoading(false);
  };

  return (
    <div className={`${css.TestSave} ${isLoading && css.Saving}`}>
      {isLoading ? (
        <>
          <Title tag="h1" size="h6">
            Сохранение...
          </Title>
          <button onClick={handleClick}>test</button>
        </>
      ) : (
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
