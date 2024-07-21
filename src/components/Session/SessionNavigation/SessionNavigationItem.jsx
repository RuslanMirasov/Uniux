import Icon from 'components/Icon/Icon';
import getPageInfoByUrl from 'utils/getPageInfoByUrl';
import { useParams } from 'react-router-dom';
import { Link } from 'components/Links';

const SessionNavigationItem = ({ task }) => {
  const { name, number } = task;
  const { project_id } = useParams();
  const { host, subdomen } = getPageInfoByUrl(window.location.href);

  return (
    <Link to={`${host}${subdomen}/sessions/${project_id}/?task=${number}`}>
      <Icon name="accordeon" size="12" />
      <p>{name}</p>
      <Icon name="accordeon-play" size="12" />
    </Link>
  );
};

export default SessionNavigationItem;
