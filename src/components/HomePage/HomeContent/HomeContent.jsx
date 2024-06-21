import css from './HomeContent.module.scss';

const HomeContent = ({ children }) => {
  return <div className={css.HomeContent}>{children}</div>;
};

export default HomeContent;
