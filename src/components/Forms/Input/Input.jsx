import { useContext } from 'react';
import { FormContext } from '../Form/Form'; // Импортируем контекст
import { validateInput } from '../../../utils/formFunctions';
import { InputCheckbox, InputRadio, InputSelect, InputText, InputTextarea } from '../InputTypes';
import '../Input/inputValidation.scss';

const Input = ({
  type,
  name,
  required = null,
  label = null,
  placeholder,
  value = '',
  options,
  min = null,
  max = null,
  disabled = false,
  onChange,
}) => {
  const { formState, handleChange } = useContext(FormContext);
  const checked = type === 'radio' ? formState[name] === value : false;

  const inputChange = e => {
    validateInput(e.target);
    handleChange && handleChange(e);
    onChange && onChange(e);
  };

  return (
    <>
      {type === 'hidden' ? (
        <input type="hidden" name={name} value={formState[name]} />
      ) : type === 'textarea' ? (
        <InputTextarea
          name={name}
          value={formState[name]}
          label={label}
          placeholder={placeholder}
          required={required}
          onChange={inputChange}
          disabled={disabled}
        />
      ) : type === 'radio' ? (
        <InputRadio type={type} name={name} label={label} value={value} checked={checked} required={required} onChange={inputChange} />
      ) : type === 'checkbox' ? (
        <InputCheckbox type={type} name={name} label={label} value={value} checked={formState[name]} required={required} onChange={inputChange} />
      ) : type === 'select' ? (
        <InputSelect type={type} name={name} label={label} placeholder={placeholder} required={required} options={options} onChange={onChange} />
      ) : (
        <InputText
          type={type}
          name={name}
          label={label}
          value={formState[name]}
          required={required}
          placeholder={placeholder}
          onChange={inputChange}
          min={min}
          max={max}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default Input;
