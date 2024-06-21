import css from './UserFace.module.scss';

const UserFace = ({ children }) => {
  return <div className={css.UserFace}>{children}</div>;
};

export default UserFace;
