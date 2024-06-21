import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks';
import Loading from './Loading/Loading';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Done = lazy(() => import('pages/Done'));
const Project = lazy(() => import('pages/Project'));
const Login = lazy(() => import('pages/Login'));
const Registration = lazy(() => import('pages/Registration'));
const PasswordReset = lazy(() => import('pages/PasswordReset'));
const CreateProject = lazy(() => import('pages/CreateProject'));
const NotFound = lazy(() => import('pages/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loading />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PrivateRoute element={Home} />} />
        <Route path="project/:project_id" element={<Project />} />
        <Route path="test/:project_id" element={<Project />} />
        <Route path="project/:project_id/done" element={<Done />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Registration />} />
        <Route path="password_reset" element={<PasswordReset />} />
        <Route path="new" element={<PrivateRoute element={CreateProject} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
