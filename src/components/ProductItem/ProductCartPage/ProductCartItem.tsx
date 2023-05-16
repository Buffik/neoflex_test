import React from 'react';

import styles from './ProductCartItem.module.css';
import { HeadPhonesCard } from '../../../assets/data/model';
import Button from '../../../UI/Button/Button';
import TextItem from '../../../UI/TextItem/TextItem';
import DeleteIcon from '../../../UI/Icons/DeleteIcon';
import DecreaseButton from '../../../UI/Icons/DecreaseButton';
import IncreaseButton from '../../../UI/Icons/IncreaseButton';
import RubleIcon from '../../../UI/Icons/RubleIcon';

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
  return (
    <div className={styles.productWrapper}>
      <div className={styles.dataWrapper}>
        <div className={styles.rowWrapper}>
          <img className={styles.productImage} src={image} alt={name} />
          <div className={styles.controlWrapper}>
            <Button>
              <DecreaseButton propClasses={['']} />
            </Button>
            <TextItem>{count}</TextItem>
            <Button>
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
        <Button>
          <DeleteIcon propClasses={['']} />
        </Button>
        <TextItem>{price * count + ' ₽'}</TextItem>
      </div>
    </div>
  );
}

export default ProductCartItem;
