import {
  buttonActions,
  keyStorage,
  storeValue,
  storeValueList,
} from '../types/contextTypes';

class handleSessionStorageData {
  static init() {
    const currentProducts = window.sessionStorage.getItem(
      keyStorage.sessionKey
    );

    if (!currentProducts) {
      const dataStorage: storeValueList = [];
      window.sessionStorage.setItem(
        keyStorage.sessionKey,
        JSON.stringify(dataStorage)
      );
      return dataStorage;
    }
    return JSON.parse(currentProducts) as storeValueList;
  }

  static getData() {
    const currentProducts = window.sessionStorage.getItem(
      keyStorage.sessionKey
    );
    if (currentProducts) return JSON.parse(currentProducts);
    throw new Error('session storage is blocked by user policy');
  }

  static isItemInStorage(data: storeValueList | undefined, id: number) {
    if (data?.length) {
      return data.some((item) => item.id === id);
    }
    return false;
  }

  static toggleItemInData(
    data: storeValueList | undefined,
    productItem: storeValue,
    id: number
  ) {
    if (data && data.length) {
      const isInStorage = handleSessionStorageData.isItemInStorage(data, id);
      if (isInStorage) {
        const updatedData = data.filter((item) => item.id !== id);
        const sessionStorage = JSON.stringify(updatedData);
        window.sessionStorage.setItem(keyStorage.sessionKey, sessionStorage);
      } else {
        const sessionStorage = JSON.stringify([...data, productItem]);
        window.sessionStorage.setItem(keyStorage.sessionKey, sessionStorage);
      }
    } else {
      const updatedData = data ? [...data, productItem] : [productItem];
      const sessionStorage = JSON.stringify(updatedData);
      window.sessionStorage.setItem(keyStorage.sessionKey, sessionStorage);
    }
  }

  static deleteItem(id: number) {
    const dataStorage: storeValueList = handleSessionStorageData.getData();
    const updatedData = dataStorage.filter((item) => item.id !== id);
    const sessionStorage = JSON.stringify(updatedData);
    window.sessionStorage.setItem(keyStorage.sessionKey, sessionStorage);
    return updatedData;
  }

  static handleItemCount(id: number, action: string) {
    const dataStorage: storeValueList = handleSessionStorageData.getData();

    const currentItem = dataStorage.find((item) => item.id === id);
    if (!currentItem) return dataStorage;
    if (currentItem.count === 1 && action === buttonActions.decrease) {
      return handleSessionStorageData.deleteItem(currentItem.id);
    }

    const updatedData = dataStorage.map((item) =>
      item.id === id
        ? {
            ...item,
            count:
              action === buttonActions.increase
                ? (item.count += 1)
                : (item.count -= 1),
          }
        : item
    );
    const sessionStorage = JSON.stringify(updatedData);
    window.sessionStorage.setItem(keyStorage.sessionKey, sessionStorage);
    return updatedData;
  }

  static countItemsInCart(data: storeValueList) {
    return data.length;
  }
}

export default handleSessionStorageData;
