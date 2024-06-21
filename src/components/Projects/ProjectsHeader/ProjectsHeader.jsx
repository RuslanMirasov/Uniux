import css from './ProjectsHeader.module.scss';

const ProjectsHeader = ({ children }) => {
  return <div className={css.ProjectsHeader}>{children}</div>;
};

export default ProjectsHeader;
