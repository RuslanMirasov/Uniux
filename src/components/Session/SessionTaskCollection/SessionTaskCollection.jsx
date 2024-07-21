import Icon from 'components/Icon/Icon';
import moment from 'moment';
import Image from 'components/Image/Image';
import { TaskMarker } from 'components/Tasks';
import { useAuth, useProject } from 'hooks';
import { Link } from 'components/Links';
import { useSearchParams } from 'react-router-dom';
import css from './SessionTaskCollection.module.scss';

const SessionTaskCollection = ({ number }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { sessions = [] } = useProject();
  const { BASE } = useAuth();

  const formatDate = isoDate => {
    return moment(isoDate).format('D MMMM YYYY');
  };

  const filteredCollection = sessions.filter(item => item?.task?.number === Number(number)) || [];

  return (
    <ul className={css.SessionCollection}>
      {filteredCollection.length > 0 &&
        filteredCollection.map(session => {
          return (
            <li key={session._id}>
              <Link
                className={css.SessionCollectionItem}
                onClick={() => {
                  setSearchParams('ssssss', '12345');
                }}
              >
                <div className={css.Image}>
                  <Image src={session.user.avatarUrl.includes('http') ? session.user.avatarUrl : `${BASE}${session.user.avatarUrl}`} />
                </div>
                <div className={css.Content}>
                  <span className={css.Date}>{formatDate(session.createdAt)}</span>
                  <span className={css.Email}>{session.user.email}</span>
                  <ul className={css.Tasks}>
                    <li key={session._id}>
                      <TaskMarker status={session.status} number={session.task.number} />
                    </li>
                  </ul>
                  <div className={css.Icon}>
                    <Icon name="accordeon-play-session" />
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default SessionTaskCollection;
