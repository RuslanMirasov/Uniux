import { Button } from 'components/Buttons';
import { useEffect, useState } from 'react';
import css from './TestStatistic.module.scss';

const TestStatistic = ({ data, task }) => {
  const [collection, setCollection] = useState(data);
  const [overall, setOverall] = useState(0);
  const [success, setSuccess] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState('00:00');

  useEffect(() => {
    if (collection && collection.length > 0) {
      setOverall(collection.length);
      setSuccess(collection.filter(session => session.status === 'done').length);
      setRate(`${((success / collection.length) * 100).toFixed(0)}%`);

      const totalDuration = collection.reduce((sum, session) => sum + session.duration, 0);
      const averageDuration = totalDuration / collection.length;
      const minutes = Math.floor(averageDuration / 60000);
      const seconds = Math.floor((averageDuration % 60000) / 1000);
      const correntTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      setTime(correntTime);
    }
  }, [collection, success]);

  useEffect(() => {
    if (!task) {
      setCollection(data);
      return;
    }
    const filteredCollection = data.filter(item => item?.task?.number === Number(task.number));
    setCollection(filteredCollection);
  }, [task, data]);

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
