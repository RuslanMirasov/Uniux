import css from './ProjectSidebarContent.module.scss';

const ProjectSidebarContent = ({ children }) => {
  return <div className={css.ProjectSidebarContent}>{children}</div>;
};

export default ProjectSidebarContent;
