import { Button } from 'components/Buttons';
import { useProject } from 'hooks';
import { useState } from 'react';
import css from './AddTaskForm.module.scss';

const AddTaskForm = () => {
  const { addNewTask } = useProject();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      addNewTask();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.AddTaskForm}>
      <Button variant="white" full isLoading={loading} onClick={handleSubmit}>
        Add task
      </Button>
    </div>
  );
};

export default AddTaskForm;
