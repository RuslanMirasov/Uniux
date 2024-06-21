import Icon from 'components/Icon/Icon';
import { useState, useRef, useEffect } from 'react';
import { validateInput } from '../../../../utils/formFunctions';
import { useSearchParams } from 'react-router-dom';
import css from '../InputSelect/InputSelect.module.scss';

const InputSelect = ({ type, name, label, required, options, value = '', onChange }) => {
  const selectInputRef = useRef(null);
  const selectWrapperRef = useRef(null);
  const [searchParams] = useSearchParams();
  const url = searchParams.get('sort') || 'lastview_desc';
  const [sort, setSort] = useState('lastview');
  const [order, setOrder] = useState(url.split('_')[1]);
  const [selectValue, setSelectValue] = useState(value);
  const [selectValueText, setSelectValueText] = useState(options['sort_' + url.split('_')[0]]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const urlParams = url.split('_');
    const sortQuery = urlParams[0];
    const orderQuery = urlParams[1];
    setOrder(orderQuery);
    setSort(sortQuery);
    setSelectValueText(options['sort_' + url.split('_')[0]]);
  }, [searchParams, options, url]);

  useEffect(() => {
    if (selectValue) {
      validateInput(selectInputRef.current);
    }
  }, [selectValue]);

  const handleOptionClick = (key, val) => {
    setSelectValue(key);
    onChange && onChange({ key: key, value: val });
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = event => {
    if (selectWrapperRef.current && !selectWrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <label className={`${css.Label} ${isOpen ? css.open : ''}`} ref={selectWrapperRef}>
      {label && <span className={css.LabelText}>{label}</span>}
      <span className={css.LabelInput}>
        <input type="hidden" data-type={type} name={name} value={selectValue} required={required} ref={selectInputRef} />
        <div className={css.InputSelect} onClick={handleOpen}>
          <span className={css.Placeholder}>{selectValueText}</span>
          <div className={css.SelectArrow}>
            <Icon name="select-arrow" color="#fff" />
          </div>
          {options && (
            <div className={`${css.Options} ${isOpen ? css.open : ''} custom-scrollbar`}>
              <ul className={`custom-scrollbar`}>
                {Object.keys(options).map(key => {
                  const isChecked = sort === key.split('_')[1] || order === key.split('_')[1];
                  if (key.includes('hr')) {
                    return <hr key={key} />;
                  } else if (key.includes('title')) {
                    return (
                      <li key={key} className={css.Disabled}>
                        {options[key]}
                      </li>
                    );
                  }
                  return (
                    <li key={key} datavalue={key} className={isChecked ? css.Checked : ''} onClick={() => handleOptionClick(key, options[key])}>
                      {options[key]}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </span>
    </label>
  );
};

export default InputSelect;
