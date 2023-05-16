import deleteFromSessionStorage from './deleteFromSessionStorage';
import handleSessionStorageStore from './handleSessionStorageStore';

const decreaseCount = (id: number) => {
  const dataStorage = handleSessionStorageStore();
  const currentItem = dataStorage.find((item) => item.id === id);
  if (!currentItem) return dataStorage;
  if (currentItem.count === 1) {
    deleteFromSessionStorage(currentItem.id);
    return handleSessionStorageStore();
  }

  const updatedData = dataStorage.map((item) =>
    item.id === id ? { ...item, count: (item.count -= 1) } : item
  );
  const sessionStorage = JSON.stringify(updatedData);
  window.sessionStorage.setItem('qpick', sessionStorage);
  return updatedData;
};

export default decreaseCount;
