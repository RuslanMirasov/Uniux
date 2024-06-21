import React, { useState } from 'react';
import Icon from 'components/Icon/Icon';
import css from './CopyLink.module.scss';
import inputCss from '../InputTypes/InputText/InputText.module.scss';

const CopyLink = ({ type = 'text', name = '', value = '' }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500);
    });
  };

  return (
    <div className={css.CopyLink}>
      {/* {children} */}
      <input type={type} name={name} value={value} className={inputCss.Input} readOnly />
      <div className={css.Button} onClick={handleClick}>
        <Icon name={copySuccess ? 'confirm' : 'copy'} color="var(--green)" size={copySuccess ? '22' : '16'} />
      </div>
    </div>
  );
};

export default CopyLink;
