import { useState } from 'react';
import { usePopup } from 'contexts/PopupContext';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonsList } from 'components/Buttons';
import { Form, Input } from 'components/Forms';
import { projectOperation } from 'api';

const AddNewProjectForm = () => {
  const { popupOpen } = usePopup();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const initialState = {
    link: '',
  };

  const handleSubmit = async data => {
    setIsLoading(true);
    try {
      await projectOperation.addNew(data);
      navigate('/');
    } catch (error) {
      popupOpen('error', `Error ${error.response.status} (${error.response.statusText})`, error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} initialState={initialState} freeze={isLoading}>
      <Input type="url" name="link" placeholder="Link to Figma project" required />
      <ButtonsList>
        <Button full isLoading={isLoading}>
          Create test
        </Button>
      </ButtonsList>
    </Form>
  );
};

export default AddNewProjectForm;
