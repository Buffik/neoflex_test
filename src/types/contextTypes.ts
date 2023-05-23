export type storeValue = {
  id: number;
  image: string;
  name: string;
  price: number;
  count: number;
};

export type storeValueList = storeValue[] | [];

export type storeType = {
  cartItems: storeValueList;
  setCartItems: React.Dispatch<React.SetStateAction<storeValueList>>;
};

export const enum keyStorage {
  sessionKey = 'qpick',
}

export const enum buttonActions {
  increase = 'increase',
  decrease = 'decrease',
}
