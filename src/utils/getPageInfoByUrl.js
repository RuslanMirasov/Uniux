const getPageInfoByUrl = url => {
  const host = window.location.origin;
  const result = {
    name: null,
    id: '',
    host,
    subdomen: '',
    shereLink: null,
  };
  const separators = ['/project/', '/test/', '/session/', '/shere/'];

  const parts = url.split('/');
  const objectIdPattern = /^[a-f\d]{24}$/i;
  for (const part of parts) {
    if (objectIdPattern.test(part)) {
      result.id = part; // Извлекаем ID
      break;
    }
  }

  for (const separator of separators) {
    if (url.includes(separator)) {
      result.name = separator.replace(/\//g, ''); // Удаляем знаки / по бокам
      const subdomen = window.location.pathname.split(separator)[0] || '';

      result.subdomen = subdomen;
      result.shereLink = `${host}${subdomen}${separator}${result.id}`; // Удаляем знаки / по бокам
      break;
    }
  }

  return result;
};

export default getPageInfoByUrl;
