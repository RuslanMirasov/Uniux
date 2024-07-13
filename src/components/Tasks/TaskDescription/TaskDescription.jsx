import { Text, Title, TitleBox } from 'components/Typography';
import css from './TaskDescription.module.scss';

const TaskDescription = ({ task }) => {
  const { name, number, description } = task;

  const taskNumberFormat = number => {
    if (number < 10) {
      return `0${number}.`;
    }
    return `${number}.`;
  };

  return (
    <TitleBox className={css.TaskDescription}>
      <Title tag="h2" size="h2">
        <span className={css.Number}>{taskNumberFormat(number)}</span> {name}
      </Title>
      <Text size="big" color="grey">
        {description}
      </Text>
    </TitleBox>
  );
};

export default TaskDescription;
