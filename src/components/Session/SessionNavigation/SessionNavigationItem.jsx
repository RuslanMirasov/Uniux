import Icon from 'components/Icon/Icon';
import { Link } from 'components/Links';

const SessionNavigationItem = ({ task }) => {
  const { _id, name } = task;

  return (
    <Link to={`${window.location.href}/${_id}`}>
      <Icon name="accordeon" size="12" />
      <p>{name}</p>
      <Icon name="accordeon-play" size="12" />
    </Link>
  );
};

export default SessionNavigationItem;
