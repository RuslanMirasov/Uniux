import css from './HomeSidebar.module.scss';

const HomeSidebar = ({ children }) => {
  return <aside className={css.HomeSidebar}>{children}</aside>;
};

export default HomeSidebar;
