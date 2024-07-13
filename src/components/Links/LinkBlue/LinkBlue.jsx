import { NavLink, useLocation } from 'react-router-dom';
import css from './LinkBlue.module.scss';

const LinkBlue = ({ to, onClick, children }) => {
  const location = useLocation();

  return to ? (
    <NavLink to={to} className={css.LinkBlue} state={{ from: `${location.pathname}${location.search}` }} onClick={onClick}>
      {children}
    </NavLink>
  ) : (
    <span className={css.LinkBlue} onClick={onClick}>
      {children}
    </span>
  );
};

export default LinkBlue;
