import css from './Fieldset.module.scss';

const Fieldset = ({ col = 'auto', label, ta = 'left', children }) => {
  return (
    <fieldset className={`${css.Fieldset} ${css[`col-${col}`]} ${css[ta]}`}>
      {label && <legend className={css.FieldsetLabel}>{label}</legend>}
      {children}
    </fieldset>
  );
};

export default Fieldset;
