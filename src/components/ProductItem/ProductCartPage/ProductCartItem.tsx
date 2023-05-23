import { useContext } from 'react';
import { DataContext } from 'context/DataContext';
import { buttonActions } from 'types/contextTypes';
import handleSessionStorageData from 'utils/handleSessionStorageData';
import Button from 'UI/Button/Button';
import TextItem from 'UI/TextItem/TextItem';
import IconItem from 'UI/Icons/IconItem';
import incr from 'assets/icons/increaseButton.svg';
import decr from 'assets/icons/decreaseButton.svg';
import deleteButton from 'assets/icons/delete.svg';
import styles from './ProductCartItem.module.css';

interface ProductCartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  count: number;
}

function ProductCartItem({ id, image, name, price, count }: ProductCartItem) {
  const data = useContext(DataContext);

  const handleDeleteButtonClick = (id: number) => {
    data?.setCartItems(handleSessionStorageData.deleteItem(id));
  };

  const handleDecreaseItemCount = (id: number) => {
    data?.setCartItems(
      handleSessionStorageData.handleItemCount(id, buttonActions.decrease)
    );
  };

  const handleIncreaseItemCount = (id: number) => {
    data?.setCartItems(
      handleSessionStorageData.handleItemCount(id, buttonActions.increase)
    );
  };

  return (
    <div className={styles.productWrapper}>
      <div className={styles.dataWrapper}>
        <div className={styles.rowWrapper}>
          <img className={styles.productImage} src={image} alt={name} />
          <div className={styles.controlWrapper}>
            <Button onClick={() => handleDecreaseItemCount(id)}>
              <IconItem linkToIcon={decr} alt={'decrease button'} />
            </Button>
            <TextItem>{count}</TextItem>
            <Button onClick={() => handleIncreaseItemCount(id)}>
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
