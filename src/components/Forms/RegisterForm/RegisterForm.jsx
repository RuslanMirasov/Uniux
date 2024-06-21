//redux
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, logIn } from '../../../redux/auth/operations';
import { useAuth } from 'hooks';

//components
import { Button } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import { useEffect } from 'react';
import { Form, Input, Fieldset } from 'components/Forms';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useAuth();
  const { popupOpen } = usePopup();
  const initialState = {
    email: '',
    password: '',
    subscribe: false,
  };

  useEffect(() => {
    if (error) {
      popupOpen('error', 'Registration failed', error);
    }
  }, [error, popupOpen]);

  const handleSubmit = ({ name, email, password, subscribe }) => {
    dispatch(
      register({
        name,
        email,
        password,
        subscribe,
      })
    ).then(response => {
      if (response.meta.requestStatus === 'fulfilled') {
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
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} initialState={initialState} freeze={loading}>
      <Input type="email" name="email" placeholder="Email" required />
      <Input type="password" name="password" placeholder="Password" min="6" required />

      <Fieldset ta="center">
        <Input type="checkbox" name="subscribe" label="Subscribe to UniUXtips and updates" value="ok" />
      </Fieldset>

      <Button variant="white" full isLoading={loading}>
        Create account
      </Button>
    </Form>
  );
};

export default RegisterForm;
