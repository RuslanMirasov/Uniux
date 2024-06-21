import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Popup from 'components/Popup/Popup';
import Main from 'components/Main/Main';

export const Layout = () => {
  return (
    <>
      <Main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Main>

      <Popup type="error" title="Error 404" text="Not Found" />
    </>
  );
};
