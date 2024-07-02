import Icon from 'components/Icon/Icon';
import { useState, useRef, useEffect } from 'react';
import css from './Accordeon.module.scss';

const Accordeon = ({ title = '', open, lock = false, children }) => {
  const [isOpen, setIsOpen] = useState(open);
  const bodyRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bodyRef.current.style.height = `${contentRef.current.scrollHeight}px`;
      return;
    }
    bodyRef.current.style.height = '0px';
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClick = () => {
    if (!lock) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`${css.Accordeon} ${isOpen && css.Open} ${lock && css.Lock}`}>
      <div className={css.Head}>
        <div onClick={handleClick}>
          <Icon name="accordeon" size="13" />
        </div>

        <div className={css.Title}>{title}</div>
        <div className={css.Button} onClick={handleClick}>
          <Icon name={!lock ? 'accordeon-arrow' : 'accordeon-play'} size={!lock ? '8' : '12'} />
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
