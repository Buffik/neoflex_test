import handleSessionStorageStore from './handleSessionStorageStore';

const increaseCount = (id: number) => {
  const dataStorage = handleSessionStorageStore();
  const updatedData = dataStorage.map((item) =>
    item.id === id ? { ...item, count: (item.count += 1) } : item
  );
  const sessionStorage = JSON.stringify(updatedData);
  window.sessionStorage.setItem('qpick', sessionStorage);
  return updatedData;
};

export default increaseCount;
