import IFrame from 'components/IFrame/IFrame';
import Logo from 'components/Logo/Logo';
import css from './SessionBody.module.scss';

const SessionBody = () => {
  return (
    <div className={`${css.SessionBody} custom-scrollbar`}>
      <Logo position="right" />
      <h2>SessionBody</h2>
    </div>
  );
};

export default SessionBody;
