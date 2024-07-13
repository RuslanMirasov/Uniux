import IFrame from 'components/IFrame/IFrame';
import Logo from 'components/Logo/Logo';
import css from './ProjectBody.module.scss';

const ProjectBody = () => {
  return (
    <div className={`${css.ProjectBody} custom-scrollbar`}>
      <Logo position="right" />
      <IFrame />
    </div>
  );
};

export default ProjectBody;
