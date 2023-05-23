import { useContext, useState } from 'react';
import TextItem from 'UI/TextItem/TextItem';
import Button from 'UI/Button/Button';
import StarIcon from 'assets/icons/like.svg';
import styles from './ProductItem.module.css';
import { DataContext } from 'context/DataContext';
import IconItem from 'UI/Icons/IconItem';
import handleSessionStorageData from 'utils/handleSessionStorageData';

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

  const [isInCart, setIsInCart] = useState(
    handleSessionStorageData.isItemInStorage(data?.cartItems, id)
  );
  const handleClick = () => {
    const item = {
      id,
      image,
      name,
      price,
      count: 1,
    };
    handleSessionStorageData.toggleItemInData(data?.cartItems, item, id);
    setIsInCart(handleSessionStorageData.isItemInStorage(data?.cartItems, id));
    data?.setCartItems(handleSessionStorageData.getData());
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
            <TextItem>{price + ' ₽'}</TextItem>
          </div>
          {prevPrice ? (
            <div className={styles.priceDiscount}>
              <TextItem>{prevPrice + ' ₽'}</TextItem>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className={styles.twoColumnWrapper}>
        <div className={styles.rate}>
          <IconItem linkToIcon={StarIcon} alt={'like icon'} />
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
