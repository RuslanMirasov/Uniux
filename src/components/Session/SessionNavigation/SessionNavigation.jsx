import css from './SessionNavigation.module.scss';
import SessionNavigationItem from './SessionNavigationItem';

const SessionNavigation = ({ tasks }) => {
  return (
    <ul className={css.SessionNavigation}>
      {tasks.map(task => (
        <li key={task._id} className={css.SessionNavigationItem}>
          <SessionNavigationItem task={task} />
        </li>
      ))}
    </ul>
  );
};

export default SessionNavigation;
