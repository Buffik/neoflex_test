import handleSessionStorageStore from './handleSessionStorageStore';

const deleteFromSessionStorage = (id: number) => {
  const dataStorage = handleSessionStorageStore();
  const updatedData = dataStorage.filter((item) => item.id !== id);
  const sessionStorage = JSON.stringify(updatedData);
  window.sessionStorage.setItem('qpick', sessionStorage);
  return updatedData;
};

export default deleteFromSessionStorage;
