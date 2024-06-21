import IFrame from 'components/IFrame/IFrame';
import Logo from 'components/Logo/Logo';
import css from './ProjectBody.module.scss';
import { useProject } from 'hooks';

const ProjectBody = () => {
  const { project } = useProject();
  const { link } = project;
  return (
    <div className={`${css.ProjectBody} custom-scrollbar`}>
      <Logo position="right" />
      <IFrame link={link} />
    </div>
  );
};

export default ProjectBody;
