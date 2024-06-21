import { debounce } from 'utils/debounce';

export const changeQueryString = debounce((searchText, param, func) => {
  func(params => {
    // Получаем текущие параметры
    const currentParams = new URLSearchParams(params);

    // Устанавливаем параметр q, очищаем его если searchText пустой
    if (searchText.trim() !== '') {
      currentParams.set(param, searchText.trim());
    } else {
      currentParams.delete(param);
    }

    return currentParams;
  });
}, 500);
