import { useState } from 'react';
import css from './ChangeTaskNameForm.module.scss';
import { TasksOperations } from 'api';

const ChangeTaskNameForm = ({ taskId, value }) => {
  const [taskName, setTaskName] = useState(value);
  const [loading, setLoading] = useState(false);
  const [oldName, setOldName] = useState(value);

  const updateName = async name => {
    setLoading(true);
    try {
      await TasksOperations.updateTask(taskId, 'name', { name: name });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  const handleNameChange = newName => {
    if (oldName.trim() === newName.trim() || newName === '') {
      setTaskName(oldName);
      return;
    }
    setOldName(newName.trim().replace(/\s+/g, ' '));
    setTaskName(newName.trim().replace(/\s+/g, ' '));

    const currentTaskName = taskName.trim().replace(/\s+/g, ' ');
    updateName(currentTaskName);
  };

  const handleChange = e => {
    setTaskName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleNameChange(e.target.elements.name.value);
  };

  const handleBlur = e => {
    handleNameChange(e.target.value);
  };

  return (
    <div className={`${css.ChangeTaskNameForm} ${loading && css.Loading}`}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={taskName} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
      </form>
    </div>
  );
};

export default ChangeTaskNameForm;
