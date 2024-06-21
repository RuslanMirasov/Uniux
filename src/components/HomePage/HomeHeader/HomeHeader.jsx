import css from './HomeHeader.module.scss';

const HomeHeader = ({ children }) => {
  return <div className={css.HomeHeader}>{children}</div>;
};

export default HomeHeader;
