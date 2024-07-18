export const updateSession = (field, value) => {
  const existingResult = JSON.parse(localStorage.getItem('session'));
  if (existingResult) {
    existingResult[field] = value;
    localStorage.setItem('session', JSON.stringify(existingResult));
  }
};
