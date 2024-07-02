import { TaskSingle, TaskSingleInfo } from 'components/Tasks';
import getPageInfoByUrl from 'utils/getPageInfoByUrl';
import css from './TasksCollection.module.scss';

const TasksCollection = ({ tasks }) => {
  const { name } = getPageInfoByUrl(window.location.href);

  return (
    <ul className={css.TasksCollection}>
      {name === 'project' && tasks.map((task, index) => <TaskSingle key={task._id} task={task} />)}
      {name === 'test' && tasks.map((task, index) => <TaskSingleInfo key={task._id} task={task} lock={true} />)}
    </ul>
  );
};

export default TasksCollection;
