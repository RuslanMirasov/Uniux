import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Icon from 'components/Icon/Icon';
import css from './GoBack.module.scss';
import { Link } from 'components/Links';

const GoBack = ({ to }) => {
  const location = useLocation();
  const [url, setUrl] = useState('/');

  useEffect(() => {
    const newUrl = to ? to : location.state?.from;
    setUrl(newUrl);
  }, [location, to]);

  return (
    <Link to={url} className={css.GoBack}>
      <Icon name="back" />
      <span>Back</span>
    </Link>
  );
};

export default GoBack;
