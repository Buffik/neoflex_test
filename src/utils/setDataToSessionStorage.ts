import { storeValue } from '../types/contextTypes';
import handleSessionStorageStore from './handleSessionStorageStore';

function setDataToSessionStorage(data: storeValue, id: number) {
  const dataStorage = handleSessionStorageStore();

  if (dataStorage.length) {
    const isInStorage = dataStorage.some((item) => item.id === id);
    if (isInStorage) {
      const updatedData = dataStorage.filter((item) => item.id !== id);
      const sessionStorage = JSON.stringify(updatedData);
      window.sessionStorage.setItem('qpick', sessionStorage);
    } else {
      const sessionStorage = JSON.stringify([...dataStorage, data]);
      window.sessionStorage.setItem('qpick', sessionStorage);
    }
  } else {
    const sessionStorage = JSON.stringify([...dataStorage, data]);
    window.sessionStorage.setItem('qpick', sessionStorage);
  }
}

export default setDataToSessionStorage;
