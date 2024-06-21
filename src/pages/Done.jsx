import { FormContainer } from 'components/Forms';
import Icon from 'components/Icon/Icon';
import { Title } from 'components/Typography';

const Registration = () => {
  return (
    <>
      <FormContainer>
        <Icon name="confirm" color="var(--green)" />
        <Title tag="h1" size="h4">
          Task completed
        </Title>
      </FormContainer>
    </>
  );
};

export default Registration;
