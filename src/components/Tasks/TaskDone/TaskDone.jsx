import Icon from 'components/Icon/Icon';
// import { useState } from 'react';
import css from './TaskDone.module.scss';

const TaskDone = ({ status }) => {
  // const [saveSession, setSaveSession] = useState(false);
  return (
    <div className={css.TaskDone}>
      {status === 'done' ? <Icon name="done" size="22" /> : <Icon name="fail" size="22" />}
      <span>Задание {status === 'fail' && 'не'} выполнено</span>
    </div>
  );
};

export default TaskDone;
