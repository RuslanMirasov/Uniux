import Icon from 'components/Icon/Icon';
import moment from 'moment';
import Image from 'components/Image/Image';
import { TaskMarker } from 'components/Tasks';
import { useAuth, useProject } from 'hooks';
import css from './SessionCollection.module.scss';

const SessionCollection = () => {
  const { sessions: { collection = [] } = {}, tasks = [] } = useProject();
  const { BASE } = useAuth();

  const formatDate = isoDate => {
    return moment(isoDate).format('D MMMM YYYY');
  };

  // Функция для группировки сессий, пока email не изменится
  const groupSessionsSequentially = sessions => {
    const groupedSessions = [];
    let currentGroup = [];
    let currentEmail = null;

    sessions.forEach(session => {
      if (session.user.email !== currentEmail) {
        if (currentGroup.length > 0) {
          groupedSessions.push(currentGroup);
        }
        currentGroup = [];
        currentEmail = session.user.email;
      }
      currentGroup.push(session);
    });

    if (currentGroup.length > 0) {
      groupedSessions.push(currentGroup);
    }

    return groupedSessions;
  };

  // Функция для добавления недостающих заданий
  const addMissingTasks = (group, tasks) => {
    const taskNumbersInGroup = group.map(session => session.task.number);
    const missingTasks = tasks.filter(task => !taskNumbersInGroup.includes(task.number));

    missingTasks.forEach(task => {
      const lastSession = group[group.length - 1];
      const newSession = {
        ...lastSession,
        _id: `${lastSession._id}-missing-${task.number}`,
        status: 'pause',
        task: {
          ...lastSession.task,
          number: task.number,
        },
      };
      group.push(newSession);
    });

    // Сортировка группы по номеру задачи
    group.sort((a, b) => a.task.number - b.task.number);

    return group;
  };

  const groupedSessions = groupSessionsSequentially(collection);

  return (
    <ul className={css.SessionCollection}>
      {groupedSessions.map((group, groupIndex) => {
        // Добавляем недостающие задания в группу
        const completeGroup = addMissingTasks([...group], tasks);

        return (
          <li key={groupIndex} className={css.SessionCollectionItem}>
            <div className={css.Image}>
              <Image
                src={completeGroup[0].user.avatarUrl.includes('http') ? completeGroup[0].user.avatarUrl : `${BASE}${completeGroup[0].user.avatarUrl}`}
              />
            </div>
            <div className={css.Content}>
              <span className={css.Date}>{formatDate(completeGroup[0].createdAt)}</span>
              <span className={css.Email}>{completeGroup[0].user.email}</span>
              <ul className={css.Tasks}>
                {completeGroup.map(session => (
                  <li key={session._id}>
                    <TaskMarker status={session.status} number={session.task.number} />
                  </li>
                ))}
              </ul>
              <div className={css.Icon}>
                <Icon name="accordeon-play-session" />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SessionCollection;
