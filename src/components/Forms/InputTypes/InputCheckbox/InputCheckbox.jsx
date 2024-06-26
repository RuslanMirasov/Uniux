import css from '../InputRadio/InputRadio.module.scss';

const InputCheckbox = ({ type, name, label, value, required, checked, onChange, readOnly }) => {
  return (
    <label className={css.RadioWrapper}>
      <input
        className={css.Radio}
        type={type}
        name={name}
        value={value}
        required={required}
        checked={checked}
        onChange={onChange}
        readOnly={readOnly}
      />
      {label && <span className={css.RadioLabel}>{label}</span>}
      <div className={`${css.Mark} ${css[`mark-${type}`]}`}></div>
    </label>
  );
};

export default InputCheckbox;
