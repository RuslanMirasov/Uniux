import { useLocation } from 'react-router-dom';

export const useQuery = () => {
  const params = new URLSearchParams(useLocation().search);
  const result = {};

  for (const [key, value] of params.entries()) {
    if (result[key]) {
      // Если ключ уже существует, добавляем значение в массив
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    } else {
      result[key] = value;
    }
  }

  return result;
};
