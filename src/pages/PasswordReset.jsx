import { GoBack, GoBackWrapper } from 'components/Buttons';
import { FormContainer, ResetPasswordForm } from 'components/Forms';
import { LinkBlue } from 'components/Links';
import Logo from 'components/Logo/Logo';
import { Text, Title } from 'components/Typography';

const PasswordReset = () => {
  return (
    <>
      <Logo position="right" />

      <GoBackWrapper>
        <GoBack path="/login" />
      </GoBackWrapper>

      <FormContainer>
        <Title tag="h1" size="h1">
          Enter your email <br />
          to reset password
        </Title>
        <ResetPasswordForm />
        <Text size="big">
          <LinkBlue to="/">Cancel</LinkBlue>
        </Text>
      </FormContainer>
    </>
  );
};

export default PasswordReset;
