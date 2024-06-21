import Icon from 'components/Icon/Icon';
import { timeAgo } from 'utils/timeAgo';
import css from './ProjectSingle.module.scss';
import placeholder from 'images/placeholder.jpg';
import Image from 'components/Image/Image';
import { Link } from 'components/Links';

const ProjectSingle = ({ project }) => {
  const { _id, name, views, thumbnail, createdAt } = project;
  const projectImage = thumbnail || placeholder;

  return (
    <li key={_id} className={css.Item}>
      <div className={css.Thumbnail}>
        <Link to={`/project/${_id}`}>{projectImage && <Image src={projectImage} alt={name} />}</Link>
      </div>
      <h3 className={css.Title}>
        <Link to={`/project/${_id}`}>{name}</Link>
      </h3>
      <div className={css.Statistic}>
        <div className={css.Statistic_item}>
          <Icon name="time" size="15" />
          <p>{timeAgo(createdAt)}</p>
        </div>
        <div className={css.Statistic_item}>
          <Icon name="views" size="15" />
          <p>{views}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectSingle;
