import TextItem from 'UI/TextItem/TextItem';
import Button from 'UI/Button/Button';

import styles from './TotalCartPrice.module.css';

type TotalCardPriceProp = {
  totalPrice: string;
};

function TotalCartPrice({ totalPrice }: TotalCardPriceProp) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rowWrapper}>
        <TextItem className={styles.title}>итого</TextItem>
        <TextItem className={styles.price}>{'₽ ' + totalPrice}</TextItem>
      </div>
      <Button className={styles.buttonPurchase}>Перейти к оформлению</Button>
    </div>
  );
}

export default TotalCartPrice;
