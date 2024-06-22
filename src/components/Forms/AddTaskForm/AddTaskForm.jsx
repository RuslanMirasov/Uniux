import { Button } from 'components/Buttons';
import { useProject } from 'hooks';
import css from './AddTaskForm.module.scss';

const AddTaskForm = () => {
  const { addNewTask, loading } = useProject();

  const handleSubmit = () => {
    addNewTask();
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
