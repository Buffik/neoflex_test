import { useContext, useState } from 'react';
import TextItem from '../../../UI/TextItem/TextItem';
import Button from '../../../UI/Button/Button';
import StarIcon from '../../../UI/Icons/StarIcon';
import RubleIcon from '../../../UI/Icons/RubleIcon';
import styles from './ProductItem.module.css';
import isItemInCart from '../../../utils/isItemInCart';
import setDataToSessionStorage from '../../../utils/setDataToSessionStorage';
import DataContext from '../../../context/DataContext';
import handleSessionStorageStore from '../../../utils/handleSessionStorageStore';

interface ProductItem {
  id: number;
  image: string;
  name: string;
  price: number;
  prevPrice: number;
  rating: number;
}

function ProductItem({
  id,
  image,
  name,
  price,
  prevPrice,
  rating,
}: ProductItem) {
  enum BUTTON_TEXT {
    buy = 'купить',
    delete = 'удалить',
  }
  const data = useContext(DataContext);

  const [isInCart, setIsInCart] = useState(isItemInCart(id));
  const handleClick = () => {
    const item = {
      id,
      image,
      name,
      price,
      count: 1,
    };
    setDataToSessionStorage(item, id);
    setIsInCart(!isInCart);
    if (data) {
      data.setData(handleSessionStorageStore());
    }
  };

  return (
    <div className={styles.productWrapper}>
      <div className={styles.imageWrapper}>
        <img className={styles.productImage} src={image} alt={name} />
      </div>
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
          <StarIcon propClasses={['']} />
          <TextItem>{rating}</TextItem>
        </div>
        <Button
          className={styles.itemButton}
          type="button"
          onClick={handleClick}
        >
          <>{isInCart ? BUTTON_TEXT.delete : BUTTON_TEXT.buy}</>
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
