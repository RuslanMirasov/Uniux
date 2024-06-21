import css from './InputText.module.scss';

const InputText = ({ type, name, value, label, required, placeholder, min, max, onChange, disabled = false, autoComplete }) => {
  return (
    <label className={css.Label}>
      {label && <span className={css.LabelText}>{label}</span>}
      <span className={css.LabelInput}>
        <input
          type={type}
          className={css.Input}
          name={name}
          value={value}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          min={min}
          max={max}
          disabled={disabled}
          autoComplete={autoComplete}
        />
      </span>
    </label>
  );
};

export default InputText;
