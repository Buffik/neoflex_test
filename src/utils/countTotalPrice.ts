import { storeValue } from '../types/contextTypes';

const countTotalPrice = (arr: storeValue[]) => {
  if (arr.length === 0) {
    return `0`;
  }
  const totalPrice = arr.reduce((acc, item) => {
    return (acc += item.price * item.count);
  }, 0);

  const normalizedValue =
    totalPrice > 999
      ? `${Math.floor(totalPrice / 1000)} ${totalPrice % 1000}`
      : `${totalPrice}`;
  return normalizedValue;
};

export default countTotalPrice;
