import { FormContainer, AddNewProjectForm } from 'components/Forms';
import Logo from 'components/Logo/Logo';
import { GoBack, GoBackWrapper } from 'components/Buttons';
import { Title } from 'components/Typography';

const CreateProject = () => {
  return (
    <>
      <Logo position="right" />

      <GoBackWrapper>
        <GoBack />
      </GoBackWrapper>

      <FormContainer>
        <Title tag="h1" size="h1">
          Create test
        </Title>
        <AddNewProjectForm />
      </FormContainer>
    </>
  );
};

export default CreateProject;
