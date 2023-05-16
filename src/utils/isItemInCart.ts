import handleSessionStorageStore from './handleSessionStorageStore';

const isItemInCart = (id: number) => {
  const data = handleSessionStorageStore();
  if (data.length) {
    return data.some((item) => item.id === id);
  }
  return false;
};

export default isItemInCart;
