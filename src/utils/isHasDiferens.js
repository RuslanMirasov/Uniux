const isHasDiferens = (oldValues, newValues) => {
  const differences = Object.keys(newValues).reduce((acc, key) => {
    if (newValues[key] !== oldValues[key]) {
      acc.push({ [key]: newValues[key] });
    }
    return acc;
  }, []);

  return differences.length > 0 ? differences : false;
};

export default isHasDiferens;
