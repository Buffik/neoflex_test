import { storeValue } from '../types/contextTypes';

function handleSessionStorageStore(): storeValue[] | [] {
  const currentProducts = window.sessionStorage.getItem('qpick');
  if (currentProducts) return JSON.parse(currentProducts);
  const sessionStorage = JSON.stringify([]);
  window.sessionStorage.setItem('qpick', sessionStorage);
  return [];
}

export default handleSessionStorageStore;
