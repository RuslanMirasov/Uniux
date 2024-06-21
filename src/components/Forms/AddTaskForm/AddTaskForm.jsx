import { useState } from 'react';
import { TasksOperations } from 'api';
import { Button } from 'components/Buttons';
import css from './AddTaskForm.module.scss';

const AddTaskForm = ({ number, projectId, onNewTaskAdd }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const newData = {
        project: projectId,
        device: 'app',
        number: Number(number + 1),
        name: `Task ${Number(number + 1)}`,
        proto: '',
        target: `${window.location.href}#Task${Number(number + 1)}_done`,
        description: '',
      };
      const newTask = await TasksOperations.addNew(newData);
      onNewTaskAdd(newTask);
    } catch (error) {
      console.log(error);
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
