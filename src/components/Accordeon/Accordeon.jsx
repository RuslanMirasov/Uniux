import Icon from 'components/Icon/Icon';
import { useState, useRef, useEffect } from 'react';
import css from './Accordeon.module.scss';

const Accordeon = ({ title = '', children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const bodyRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bodyRef.current.style.height = `${contentRef.current.scrollHeight}px`;
      return;
    }
    bodyRef.current.style.height = '0px';
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${css.Accordeon} ${isOpen && css.Open}`}>
      <div className={css.Head}>
        <div onClick={handleClick}>
          <Icon name="accordeon" />
        </div>

        <div className={css.Title}>{title}</div>
        <div className={css.Button} onClick={handleClick}>
          <Icon name="accordeon-arrow" />
        </div>
      </div>
      <div className={css.Body} ref={bodyRef}>
        <div className={css.BodyContent} ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordeon;
