import React from 'react';
import TextItem from '../../UI/TextItem/TextItem';
import Button from '../../UI/Button/Button';

import styles from './TotalCardPrice.module.css';

type TotalCardPriceProp = {
  totalPrice: string;
};

function TotalCardPrice({ totalPrice }: TotalCardPriceProp) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rowWrapper}>
        <TextItem className={styles.title}>итого</TextItem>
        <TextItem className={styles.price}>{'₽ ' + totalPrice}</TextItem>
      </div>
      <Button className={styles.buttonPurchase}>
        <>Перейти к оформлению</>
      </Button>
    </div>
  );
}

export default TotalCardPrice;
