import Main from '../../components/Layouts/Main/Main';
import CartProductGroup from '../../modules/CartProductGroup/CartProductGroup';
import TotalCardPrice from '../../components/TotalCardPrice/TotalCardPrice';

import styles from './CartPage.module.css';
import TextItem from '../../UI/TextItem/TextItem';
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { storeType } from '../../types/contextTypes';
import countTotalPrice from '../../utils/countTotalPrice';

function CartPage() {
  const data = useContext(DataContext);
  const handleTotalPrice = (data: storeType | null): string => {
    if (data) {
      return countTotalPrice(data.cartItems);
    } else {
      return `${0}`;
    }
  };
  return (
    <Main>
      <TextItem className={styles.title}>корзина</TextItem>
      <div className={styles.wrapper}>
        <CartProductGroup />
        <TotalCardPrice totalPrice={handleTotalPrice(data)} />
      </div>
    </Main>
  );
}

export default CartPage;
