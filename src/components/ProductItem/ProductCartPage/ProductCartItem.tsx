import React, { useContext } from 'react';

import styles from './ProductCartItem.module.css';
import { HeadPhonesCard } from '../../../assets/data/model';
import Button from '../../../UI/Button/Button';
import TextItem from '../../../UI/TextItem/TextItem';
import DeleteIcon from '../../../UI/Icons/DeleteIcon';
import DecreaseButton from '../../../UI/Icons/DecreaseButton';
import IncreaseButton from '../../../UI/Icons/IncreaseButton';
import RubleIcon from '../../../UI/Icons/RubleIcon';
import DataContext from '../../../context/dataContext';
import setDataToSessionStorage from '../../../utils/setDataToSessionStorage';
import deleteFromSessionStorage from '../../../utils/deleteFromSessionStorage';
import decreaseCount from '../../../utils/decreaseCount';
import increaseCount from '../../../utils/increaseCount';

interface ProductCartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  count: number;
}

// const findItems = (id): HeadPhonesCard => {
//   return;
// };

function ProductCartItem({ id, image, name, price, count }: ProductCartItem) {
  const data = useContext(DataContext);

  const handleDeleteButtonClick = (id: number) => {
    if (data) {
      data.setData(deleteFromSessionStorage(id));
    }
  };

  const handleDecreaseItemCount = (id: number) => {
    if (data) {
      data.setData(decreaseCount(id));
    }
  };

  const handleIncreaseItemCount = (id: number) => {
    if (data) {
      data.setData(increaseCount(id));
    }
  };

  return (
    <div className={styles.productWrapper}>
      <div className={styles.dataWrapper}>
        <div className={styles.rowWrapper}>
          <img className={styles.productImage} src={image} alt={name} />
          <div className={styles.controlWrapper}>
            <Button
              onClick={() => {
                handleDecreaseItemCount(id);
              }}
            >
              <DecreaseButton propClasses={['']} />
            </Button>
            <TextItem>{count}</TextItem>
            <Button
              onClick={() => {
                handleIncreaseItemCount(id);
              }}
            >
              <IncreaseButton propClasses={['']} />
            </Button>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <TextItem className={styles.textItem}>{name}</TextItem>
          <TextItem className={styles.textPrice}>{price + ' ₽'}</TextItem>
        </div>
      </div>
      <div className={styles.rowWrapper}>
        <Button onClick={() => handleDeleteButtonClick(id)}>
          <DeleteIcon propClasses={['']} />
        </Button>
        <TextItem>{price * count + ' ₽'}</TextItem>
      </div>
    </div>
  );
}

export default ProductCartItem;
