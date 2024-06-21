import css from './FormContainer.module.scss';

const FormContainer = ({ children }) => {
  return <div className={css.FormContainer}>{children}</div>;
};

export default FormContainer;
