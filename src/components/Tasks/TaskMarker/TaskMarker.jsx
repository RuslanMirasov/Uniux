import css from './TaskMarker.module.scss';

const TaskMarker = ({ position = 'relative', status, number = '1' }) => {
  const classes = `
    ${css.TaskMarker} 
    ${css[`status--${status}`]} 
    ${css[`position--${position}`]}
  `.trim();

  return (
    <div className={classes}>
      <p>Task {number}</p>
    </div>
  );
};

export default TaskMarker;
