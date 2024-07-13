import { useState, useRef, useEffect } from 'react';
import { useProject } from 'hooks';
import css from './ChangeProjectNameForm.module.scss';
import Icon from 'components/Icon/Icon';

const ChangeProjectNameForm = ({ value }) => {
  const { updateProjectName } = useProject();
  const [projectName, setProjectName] = useState(value);
  const [oldName, setOldName] = useState(value);
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = '0px';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [projectName]);

  const handleNameChange = async newName => {
    if (oldName.trim() === newName.trim() || newName === '') {
      setProjectName(oldName);
      return;
    }
    setLoading(true);
    setOldName(newName.trim().replace(/\s+/g, ' '));
    setProjectName(newName.trim().replace(/\s+/g, ' '));

    const currentprojectName = projectName.trim().replace(/\s+/g, ' ');

    try {
      await updateProjectName(currentprojectName);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = e => {
    setProjectName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleNameChange(e.target.elements.name.value);
  };

  const handleBlur = e => {
    handleNameChange(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleNameChange(e.target.value);
    }
  };

  return (
    <div className={`${css.ChangeProjectNameForm} ${loading && css.Loading}`}>
      <form onSubmit={handleSubmit}>
        <textarea
          ref={textareaRef}
          name="name"
          value={projectName}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        ></textarea>
      </form>
      <Icon name="pen" color="var(--grey)" />
    </div>
  );
};

export default ChangeProjectNameForm;
