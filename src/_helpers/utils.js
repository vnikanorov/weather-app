
// Converts the temperature to an integer

const getIntTemp = (temp) => {
  const str = String(temp);
  return str.split('.')[0];
};

export default {
  getIntTemp,
};
