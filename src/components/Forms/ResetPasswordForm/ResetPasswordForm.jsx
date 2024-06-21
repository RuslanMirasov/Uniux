import { useState } from 'react';
import { Button, ButtonsList } from 'components/Buttons';
import { Form, Input } from 'components/Forms';

const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const initialState = {
    email: '',
  };

  const handleSubmit = data => {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Form onSubmit={handleSubmit} initialState={initialState} freeze={isLoading}>
      <Input type="email" name="email" placeholder="Email" required />
      <ButtonsList>
        <Button variant="white" full isLoading={isLoading}>
          Reset password
        </Button>
      </ButtonsList>
    </Form>
  );
};

export default ResetPasswordForm;
