import { Button } from 'components/Buttons';
import { useProject } from 'hooks';
import css from './TestStatistic.module.scss';

const TestStatistic = () => {
  const { sessions } = useProject();
  const { overall, success, rate, time } = sessions;
  return (
    <div className={css.TestStatistic}>
      <div className={css.Item}>
        <b>overall</b>
        <p>{overall}</p>
      </div>
      <div className={css.Item}>
        <b>Success</b>
        <p>{success}</p>
      </div>
      <div className={css.Item}>
        <b>Success rate</b>
        <p>{rate}</p>
      </div>
      <div className={css.Item}>
        <b>Avr. time</b>
        <p>{time}</p>
      </div>
      <div className={css.Button}>
        <Button full>Click map</Button>
      </div>
    </div>
  );
};

export default TestStatistic;
