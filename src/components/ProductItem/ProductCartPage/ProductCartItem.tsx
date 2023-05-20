import { useContext } from 'react';

import styles from './ProductCartItem.module.css';
import Button from '../../../UI/Button/Button';
import TextItem from '../../../UI/TextItem/TextItem';
import DataContext from '../../../context/DataContext';
import deleteFromSessionStorage from '../../../utils/deleteFromSessionStorage';
import decreaseCount from '../../../utils/decreaseCount';
import increaseCount from '../../../utils/increaseCount';
import IconItem from '../../../UI/Icons/IconItem';
import incr from '../../../assets/icons/increaseButton.svg';
import decr from '../../../assets/icons/decreaseButton.svg';
import deleteButton from '../../../assets/icons/delete.svg';

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
              <IconItem linkToIcon={decr} alt={'decrease button'} />
            </Button>
            <TextItem>{count}</TextItem>
            <Button
              onClick={() => {
                handleIncreaseItemCount(id);
              }}
            >
              <IconItem linkToIcon={incr} alt={'increase button'} />
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
          <IconItem linkToIcon={deleteButton} alt={'delete button'} />
        </Button>
        <TextItem>{price * count + ' ₽'}</TextItem>
      </div>
    </div>
  );
}

export default ProductCartItem;
