import Icon from 'components/Icon/Icon';
import css from './ProjectsNotFound.module.scss';

const ProjectsNotFound = ({ text, query }) => {
  return (
    <div className={css.ProjectsNotFound}>
      <Icon name="notfound" size="40" />
      <p>
        {text} {query && `"${query}"`}
      </p>
    </div>
  );
};

export default ProjectsNotFound;
