import { TaskSingle, TaskSingleInfo } from 'components/Tasks';
import { useAuth, useProject } from 'hooks';
import css from './TasksCollection.module.scss';

const TasksCollection = ({ tasks }) => {
  const { isLoggedIn, user } = useAuth();
  const { project } = useProject();
  const isOwner = user._id === project.owner._id;

  return (
    <ul className={css.TasksCollection}>
      {isLoggedIn && isOwner
        ? tasks.map(task => <TaskSingle key={task._id} task={task} />)
        : tasks.map(task => <TaskSingleInfo key={task._id} task={task} />)}
    </ul>
  );
};

export default TasksCollection;
