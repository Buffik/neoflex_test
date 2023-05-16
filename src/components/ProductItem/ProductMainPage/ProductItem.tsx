import { useState } from 'react';
import TextItem from '../../../UI/TextItem/TextItem';
import Button from '../../../UI/Button/Button';
import StarIcon from '../../../UI/Icons/StarIcon';
import RubleIcon from '../../../UI/Icons/RubleIcon';
import styles from './ProductItem.module.css';

interface ProductItem {
  image: string;
  name: string;
  price: number;
  prevPrice: number;
  rating: number;
}

function ProductItem({ image, name, price, prevPrice, rating }: ProductItem) {
  enum BUTTON_TEXT {
    buy = 'купить',
    delete = 'удалить',
  }
  const [isInCart, setIsInCart] = useState(false);
  return (
    <div className={styles.productWrapper}>
      <img className={styles.productImage} src={image} alt={name} />
      <div className={styles.twoColumnWrapper}>
        <TextItem>{name}</TextItem>
        <div className={styles.priceWrapper}>
          <div className={styles.price}>
            <TextItem>{price}</TextItem>
            <RubleIcon propClasses={['']} />
          </div>
          {prevPrice ? (
            <div className={styles.priceDiscount}>
              <TextItem>{prevPrice}</TextItem>
              <RubleIcon propClasses={['']} />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className={styles.twoColumnWrapper}>
        <div className={styles.rate}>
          <StarIcon propClasses={['mainPage__icon', 'rateIcon']} />
          <TextItem>{rating}</TextItem>
        </div>
        <Button type="button">
          <>{isInCart ? BUTTON_TEXT.delete : BUTTON_TEXT.buy}</>
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
