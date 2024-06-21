import Icon from 'components/Icon/Icon';
import { useSearchParams } from 'react-router-dom';
import css from './SearchForm.module.scss';
import { changeQueryString } from 'utils/changeQueryString';
import { useState, useEffect } from 'react';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') || '');

  const handleInputChange = e => {
    const searchText = e.target.value;
    setSearch(searchText); // Обновляем состояние инпута мгновенно
    changeQueryString(searchText, 'q', setSearchParams); // Вызываем debounce для обновления параметров с задержкой
  };

  // Синхронизируем значение инпута с параметрами поиска при изменении URL
  useEffect(() => {
    setSearch(searchParams.get('q') || '');
  }, [searchParams]);

  return (
    <div className={css.SearchForm}>
      <label className={css.Label}>
        <input type="text" name="q" className={css.Input} placeholder="Search for anything" value={search} onChange={handleInputChange} />
        <div className={css.Icon}>
          <Icon name="search" size="12" />
        </div>
      </label>
    </div>
  );
};

export default SearchForm;
