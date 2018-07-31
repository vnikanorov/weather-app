import moment from 'moment';

// Converts the temperature to an integer
const getIntTemp = (temp) => {
  const str = String(temp);
  return str.split('.')[0];
};

const timestampToTime = timestamp => (moment.unix(timestamp).format('HH:mm'));

export default {
  getIntTemp,
  timestampToTime,
};
