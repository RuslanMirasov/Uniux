import { FormContainer, RegisterForm } from 'components/Forms';
import { LinkBlue } from 'components/Links';
import Logo from 'components/Logo/Logo';
import { Text, Title } from 'components/Typography';

const Registration = () => {
  return (
    <>
      <Logo position="left" />
      <FormContainer>
        <Title tag="h1" size="h1">
          Sign up for Uniux
        </Title>
        <RegisterForm />
        <Text color="grey">
          By clicking "Create account" or "Continue with Google", <br />
          you agree to the <LinkBlue to="/">UniUX</LinkBlue> TOS and <LinkBlue to="/">Privacy Policy</LinkBlue>
        </Text>
        <Text color="grey">
          *By opting in, you are consenting to receive product, <br />
          service and events updates from Figma. You can <br />
          unsubscribe at any time.
        </Text>
        <Text size="big">
          Already have an account? <LinkBlue to="/login">Log in</LinkBlue>
        </Text>
      </FormContainer>
    </>
  );
};

export default Registration;
