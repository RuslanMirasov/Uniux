import { useState } from 'react';
import { useProject } from 'hooks';
import css from './ChangeTaskNameForm.module.scss';

const ChangeTaskNameForm = ({ taskId, value }) => {
  const { updateTakskByName } = useProject();
  const [taskName, setTaskName] = useState(value);
  const [oldName, setOldName] = useState(value);
  const [loading, setLoading] = useState(false);

  const handleNameChange = async newName => {
    if (oldName.trim() === newName.trim() || newName === '') {
      setTaskName(oldName);
      return;
    }
    setLoading(true);
    setOldName(newName.trim().replace(/\s+/g, ' '));
    setTaskName(newName.trim().replace(/\s+/g, ' '));

    const currentTaskName = taskName.trim().replace(/\s+/g, ' ');

    try {
      await updateTakskByName(taskId, 'name', currentTaskName);
    } finally {
      setLoading(false);
    }
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
