const getTestUrl = id => {
  const host = window.location.origin;
  const separator = window.location.pathname.includes('/project/') ? '/project/' : '/test/';
  const subdomen = window.location.pathname.split(separator)[0] || '';
  const url = `${host}${subdomen}/test/${id}`;
  return url.trim();
};

export default getTestUrl;
