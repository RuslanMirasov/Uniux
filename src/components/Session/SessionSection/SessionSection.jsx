import css from './SessionSection.module.scss';

const SessionSection = ({ title, children }) => {
  return (
    <div className={css.SessionSection}>
      {title && <h3 className={css.Title}>{title}</h3>}
      {children}
    </div>
  );
};

export default SessionSection;
