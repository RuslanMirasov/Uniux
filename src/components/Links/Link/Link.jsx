import { NavLink, useLocation } from 'react-router-dom';

const Link = ({ to, children, className }) => {
  const location = useLocation();

  return (
    <NavLink to={to} className={className} state={{ from: `${location.pathname}${location.search}` }}>
      {children}
    </NavLink>
  );
};

export default Link;
