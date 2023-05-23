import { storeValue } from '../types/contextTypes';

const countTotalPrice = (arr: storeValue[]) => {
  if (arr.length) {
    const totalPrice = arr.reduce((acc, item) => {
      return (acc += item.price * item.count);
    }, 0);

    const normalizedValue =
      totalPrice > 999
        ? `${Math.floor(totalPrice / 1000)} ${totalPrice % 1000}`
        : `${totalPrice}`;
    return normalizedValue;
  }
  return '0';
};

export default countTotalPrice;
