import IFrame from 'components/IFrame/IFrame';
import Logo from 'components/Logo/Logo';
import css from './ProjectBody.module.scss';

const ProjectBody = ({ project }) => {
  const { link } = project;
  return (
    <div className={css.ProjectBody}>
      <Logo position="right" />
      <IFrame link={link} />
    </div>
  );
};

export default ProjectBody;
