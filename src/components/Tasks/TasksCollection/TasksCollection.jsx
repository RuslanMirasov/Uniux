import { TaskSingle } from 'components/Tasks';
import css from './TasksCollection.module.scss';

const TasksCollection = ({ tasks }) => {
  return (
    <ul className={css.TasksCollection}>
      {tasks.map(task => (
        <TaskSingle key={task._id} task={task} />
      ))}
    </ul>
  );
};

export default TasksCollection;
