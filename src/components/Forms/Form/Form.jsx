import { useState, createContext } from 'react';
import { validateForm } from '../../../utils/formFunctions';
import css from './Form.module.scss';

const FormContext = createContext();

const Form = ({ method = 'post', onSubmit, initialState, freeze = false, children }) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = e => {
    const { name, type, checked, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: type !== 'checkbox' ? value : checked,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errorsCount = validateForm(e.target);
    if (errorsCount > 0) {
      return;
    }

    try {
      await onSubmit(formState);
    } finally {
      setFormState(initialState);
    }
  };

  return (
    <FormContext.Provider value={{ formState, handleChange }}>
      <form action="/" method={method} className={`${css.Form} ${freeze && css.Freeze}`} noValidate onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export { FormContext };
export default Form;
