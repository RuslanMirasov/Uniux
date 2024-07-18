import { GoBack, GoBackWrapper } from 'components/Buttons';
import Logo from 'components/Logo/Logo';
import PageNotFound from 'components/PageNotFound/PageNotFound';

const NotFound = () => {
  return (
    <>
      <GoBackWrapper>
        <GoBack />
      </GoBackWrapper>

      <Logo position="right" />

      <PageNotFound />
    </>
  );
};

export default NotFound;
