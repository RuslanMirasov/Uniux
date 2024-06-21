import css from './Comments.module.scss';

const Comments = ({ children }) => {
  return <div className={css.Comments}>{children}</div>;
};

export default Comments;
