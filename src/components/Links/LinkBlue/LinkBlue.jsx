import { NavLink, useLocation } from 'react-router-dom';
import css from './LinkBlue.module.scss';

const LinkBlue = ({ to, children }) => {
  const location = useLocation();

  return (
    <NavLink to={to} className={css.LinkBlue} state={{ from: `${location.pathname}${location.search}` }}>
      {children}
    </NavLink>
  );
};

export default LinkBlue;
