import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isLoggedIn, token } = useAuth();

  const isValidToken = () => {
    if (!token) return false;

    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp > currentTime;
    } catch (error) {
      return false;
    }
  };

  if (!isLoggedIn || !isValidToken()) {
    return <Navigate to="/login" />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
