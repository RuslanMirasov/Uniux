let debounceTimeout;
export const debounce = (func, delay) => {
  return (...args) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
