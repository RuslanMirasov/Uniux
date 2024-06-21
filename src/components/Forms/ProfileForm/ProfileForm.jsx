import { useDispatch } from 'react-redux';
import { updateUser } from '../../../redux/auth/operations';

import { useAuth } from 'hooks';
import { useState, useEffect } from 'react';
import { usePopup } from 'contexts/PopupContext';
import { Button, ButtonsList } from 'components/Buttons';
import { Form, Input, Fieldset } from 'components/Forms';

const ProfileForm = ({ closeProfile }) => {
  const dispatch = useDispatch();
  const { user, error, loading } = useAuth();
  const { popupOpen } = usePopup();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const initialState = {
    name: user.name,
    email: user.email,
    subscribe: user.subscribe,
    oldpassword: '',
    password: '',
  };

  useEffect(() => {
    if (error) {
      popupOpen('error', 'File upload error!', error);
    }
  }, [error, popupOpen]);

  const handleSubmit = ({ name, email, subscribe, oldpassword, password }) => {
    if (oldpassword && !password) {
      popupOpen('error', 'Update error!', 'Set a new password to change.');
      return;
    }
    if (!oldpassword && password) {
      popupOpen('error', 'Update error!', 'To change your password, your current password is required.');
      return;
    }
    dispatch(
      updateUser({
        name,
        email,
        subscribe,
        oldpassword,
        password,
      })
    ).then(response => {
      if (response.meta.requestStatus === 'fulfilled') {
        popupOpen('confirm', 'Profile updated!', 'The new data has been successfully saved to your profile.');
        setIsButtonDisabled(true);
        closeProfile();
      }
    });
  };

  const handleChange = e => {
    const form = e.target.closest('form');
    const formInputs = form.querySelectorAll('input'); // Получаем все input в форме
    const formObject = {};

    formInputs.forEach(inputElement => {
      if (inputElement.type === 'checkbox') {
        formObject[inputElement.name] = inputElement.checked;
      } else {
        formObject[inputElement.name] = inputElement.value;
      }
    });

    const isFormDifferent = (formObject, initialState) => {
      for (const [key, value] of Object.entries(formObject)) {
        if (value !== initialState[key]) {
          return true;
        }
      }
      return false;
    };

    if (isFormDifferent(formObject, initialState)) {
      setIsButtonDisabled(false);
      return;
    }
    setIsButtonDisabled(true);
  };

  return (
    <Form onSubmit={handleSubmit} initialState={initialState} freeze={loading}>
      <Fieldset col="1">
        <Input type="text" name="name" placeholder="Name" required onChange={handleChange} min={2} />
        <Input type="email" name="email" placeholder="Email" disabled />
        <Input type="checkbox" name="subscribe" label="Subscribed for updates" value="ok" onChange={handleChange} />
      </Fieldset>

      <Fieldset label="Reset password" col="1">
        <Input type="password" name="oldpassword" placeholder="Your password" onChange={handleChange} />
        <Input type="password" name="password" placeholder="New password" onChange={handleChange} />
      </Fieldset>

      <ButtonsList>
        <Button variant="white" full disabled={isButtonDisabled} isLoading={loading}>
          Save
        </Button>
      </ButtonsList>
    </Form>
  );
};

export default ProfileForm;
