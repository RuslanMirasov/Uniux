import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../../redux/auth/operations';
import { useAuth } from 'hooks';

import { useEffect } from 'react';
import { usePopup } from 'contexts/PopupContext';
import { Button, ButtonsList } from 'components/Buttons';
import { Form, Input } from 'components/Forms';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useAuth();
  const { popupOpen } = usePopup();
  const initialState = {
    email: '',
    password: '',
  };

  useEffect(() => {
    if (error) {
      popupOpen('error', 'Access denied', error);
    }
  }, [error, popupOpen]);

  const handleSubmit = ({ email, password }) => {
    dispatch(
      logIn({
        email,
        password,
      })
    ).then(response => {
      if (response.meta.requestStatus === 'fulfilled') {
        navigate('/');
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} initialState={initialState} freeze={loading}>
      <Input type="email" name="email" placeholder="Email" required />
      <Input type="password" name="password" placeholder="Password" min="6" required />
      <ButtonsList>
        <Button variant="white" full isLoading={loading}>
          Log in
        </Button>
      </ButtonsList>
    </Form>
  );
};

export default LoginForm;
