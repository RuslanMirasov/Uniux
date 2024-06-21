import css from './SidebarContent.module.scss';

const SidebarContent = ({ children }) => {
  return <div className={css.SidebarContent}>{children}</div>;
};

export default SidebarContent;
