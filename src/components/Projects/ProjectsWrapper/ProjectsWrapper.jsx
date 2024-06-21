import css from './ProjectsWrapper.module.scss';

const ProjectsWrapper = ({ children }) => {
  return <div className={`${css.ProjectsWrapper} custom-scrollbar`}>{children}</div>;
};

export default ProjectsWrapper;
