import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectError,
  selectLoading,
  selectAvatarLoading,
  selectToken,
} from '../redux/auth/selectors';
import { BASE_URL } from 'api';

export const useAuth = () => {
  const BASE = BASE_URL;
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const avatarLoading = useSelector(selectAvatarLoading);

  return {
    BASE,
    isLoggedIn,
    isRefreshing,
    user,
    token,
    error,
    loading,
    avatarLoading,
  };
};
