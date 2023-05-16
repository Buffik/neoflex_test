import { storeValue } from '../types/contextTypes';

const countItemsInCart = (data: storeValue[] | [] | null) => {
  if (!data) return 0;
  return data.length;
};

export default countItemsInCart;
