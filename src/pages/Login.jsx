import { FormContainer, LoginForm } from 'components/Forms';
import { LinkBlue } from 'components/Links';
import Logo from 'components/Logo/Logo';
import { Text, Title } from 'components/Typography';

const Login = () => {
  return (
    <>
      <Logo position="left" />
      <FormContainer>
        <Title tag="h1" size="h1">
          Log in to Uniux
        </Title>
        <LoginForm />
        <Text size="big">
          <LinkBlue to="/password_reset">Reset password</LinkBlue>
        </Text>
        <Text size="big">
          No account? <LinkBlue to="/signup">Create one</LinkBlue>
        </Text>
      </FormContainer>
    </>
  );
};

export default Login;
