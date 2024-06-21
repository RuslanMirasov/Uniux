import { GoBack, GoBackWrapper } from 'components/Buttons';
import { useRef } from 'react';

import Logo from 'components/Logo/Logo';
import PageNotFound from 'components/PageNotFound/PageNotFound';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? `/`);
  return (
    <>
      <GoBackWrapper>
        <GoBack to={backLinkLocationRef.current} />
      </GoBackWrapper>

      <Logo position="right" />

      <PageNotFound />
    </>
  );
};

export default NotFound;
