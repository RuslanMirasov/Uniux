import Accordeon from 'components/Accordeon/Accordeon';
import { Title, Text } from 'components/Typography';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './TaskSingleInfo.module.scss';

const TaskSingleInfo = ({ task, lock }) => {
  const { _id, name, number, description } = task;
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const currentTaskNumber = searchParams.get('task');
    if ((!currentTaskNumber && Number(number) === 1) || (currentTaskNumber && Number(currentTaskNumber) === Number(number))) {
      setIsOpen(true);
      return;
    }
    setIsOpen(false);
  }, [searchParams, number]);

  return (
    <li key={_id} className={css.TaskSingleInfo}>
      <Accordeon title={`${number}. ${name}`} open={isOpen} lock={lock}>
        <div className={css.TaskDescription}>
          <Title tag="b" size="h5">
            {name}
          </Title>
          <Text size="big" color="grey">
            {description}
          </Text>
        </div>
      </Accordeon>
    </li>
  );
};

export default TaskSingleInfo;
