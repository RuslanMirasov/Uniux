import { Input, Form } from '..';
import { useSearchParams } from 'react-router-dom';
import { changeQueryString } from 'utils/changeQueryString';
import { useState, useEffect } from 'react';
import css from './SortForm.module.scss';

const SortForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(searchParams.get('sort') || 'lastview_desc');

  const selectChange = ({ key }) => {
    const sortRequest = key.includes('sort_') ? key.split('_')[1] : sort.split('_')[0];
    const orderRequest = key.includes('order_') ? key.split('_')[1] : sort.split('_')[1];
    changeQueryString(`${sortRequest}_${orderRequest}`, 'sort', setSearchParams);
  };

  // Синхронизируем значение инпута с параметрами поиска при изменении URL
  useEffect(() => {
    setSort(searchParams.get('sort') || 'lastview_desc');
  }, [searchParams]);

  return (
    <div className={css.SortForm}>
      <Form>
        <Input
          type="select"
          name="sort"
          required
          value={sort}
          options={{
            title: 'Sort By',
            sort_lastview: 'Last viewed',
            sort_views: 'Most popular',
            sort_name: 'Alphabetical',
            sort_createdAt: 'Date created',
            hr: '------------------',
            title2: 'Order',
            order_asc: 'Ascending',
            order_desc: 'Descending',
          }}
          onChange={selectChange}
        />
      </Form>
    </div>
  );
};

export default SortForm;
