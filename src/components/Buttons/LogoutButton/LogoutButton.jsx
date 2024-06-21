import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';

import Icon from 'components/Icon/Icon';
import css from './LogoutButton.module.scss';

const LogoutButton = () => {
  const dispatch = useDispatch();

  return (
    <button type="button" className={css.LogoutButton} onClick={() => dispatch(logOut())}>
      <Icon name="logout" size="16" />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
