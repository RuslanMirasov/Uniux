import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Icon from 'components/Icon/Icon';
import css from './GoBack.module.scss';

const GoBack = ({ to = '/' }) => {
  const location = useLocation();
  const [url, setUrl] = useState('/');

  useEffect(() => {
    const newUrl = location.state?.from ?? to;
    setUrl(newUrl);
  }, [location, to]);

  return (
    <NavLink to={url} className={css.GoBack} state={{ from: `${location.pathname}${location.search}` }}>
      <Icon name="back" />
      <span>Back</span>
    </NavLink>
  );
};

export default GoBack;
