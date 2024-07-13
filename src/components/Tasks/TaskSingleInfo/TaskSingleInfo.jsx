import Accordeon from 'components/Accordeon/Accordeon';
import { Text } from 'components/Typography';
import css from './TaskSingleInfo.module.scss';

const TaskSingleInfo = ({ task, lock }) => {
  const { _id, name, number, description } = task;

  return (
    <li key={_id} className={css.TaskSingleInfo}>
      <Accordeon title={`${number}. ${name}`} lock={lock}>
        <div className={css.TaskDescription}>
          <Text size="big" color="grey">
            {description}
          </Text>
        </div>
      </Accordeon>
    </li>
  );
};

export default TaskSingleInfo;
