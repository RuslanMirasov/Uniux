import Accordeon from 'components/Accordeon/Accordeon';
import { ChangeTaskNameForm, CopyLink, Fieldset } from 'components/Forms';
import { InputRadio, InputText } from 'components/Forms/InputTypes';
import { Text } from 'components/Typography';
import { useState } from 'react';
import { tasksOperations } from 'api';
import { validateInput } from 'utils/formFunctions';
import css from './TaskSingle.module.scss';
import { debounce } from 'utils/debounce';

const TaskSingle = ({ task }) => {
  const [loading, setLoading] = useState(false);
  const { _id, device, name, target, description, proto } = task;
  const [newValues, setNewValues] = useState({
    device,
    proto,
    description,
  });

  const debouncedUpdate = debounce(async (name, value) => {
    await update(name, value);
  }, 1200);

  const handleChange = e => {
    const error = validateInput(e.target);
    const name = e.target.name;
    const value = e.target.value;
    setNewValues(prevValues => ({
      ...prevValues,
      [name]: value.replace(/\s+/g, ' '),
    }));

    if (!error) {
      debouncedUpdate(name, value);
    }
  };

  const update = async (name, value) => {
    setLoading(true);
    try {
      await tasksOperations.updateTask(_id, name, { [name]: value.trim().replace(/\s+/g, ' ') });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  return (
    <li key={_id} className={`${css.TaskSingle} ${loading && css.Loading}`}>
      <Accordeon title={<ChangeTaskNameForm value={name} taskId={_id} />}>
        <form className={css.Form}>
          <Fieldset>
            <InputRadio type="radio" name="device" label="Browser" value="browser" checked={newValues.device === 'browser'} onChange={handleChange} />
            <InputRadio type="radio" name="device" label="App" value="app" checked={newValues.device === 'app'} onChange={handleChange} />
          </Fieldset>

          <Fieldset col="1">
            <InputText
              type="url"
              name="proto"
              placeholder="Link to Figma preview"
              value={newValues.proto}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <InputText
              type="text"
              name="description"
              placeholder="Describe the task"
              value={newValues.description}
              onChange={handleChange}
              autoComplete="off"
              min="10"
              required
            />
          </Fieldset>

          <Fieldset col="1">
            <CopyLink type="url" name="target" value={target} />
            <Text size="small" color="grey" align="center">
              Copy link to final action on test
            </Text>
          </Fieldset>
        </form>
      </Accordeon>
    </li>
  );
};

export default TaskSingle;
