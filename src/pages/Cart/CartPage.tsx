import Main from 'components/Layouts/Main/Main';
import CartProductGroup from 'modules/CartProductGroup/CartProductGroup';
import TotalCardPrice from 'components/TotalCardPrice/TotalCardPrice';

import styles from './CartPage.module.css';
import TextItem from 'UI/TextItem/TextItem';
import { useContext } from 'react';
import { DataContext } from 'context/DataContext';
import countTotalPrice from 'utils/countTotalPrice';

function CartPage() {
  const data = useContext(DataContext);
  return (
    <Main>
      <TextItem className={styles.title}>корзина</TextItem>
      <div className={styles.wrapper}>
        <CartProductGroup />
        <TotalCardPrice
          totalPrice={data ? countTotalPrice(data.cartItems) : '0'}
        />
      </div>
    </Main>
  );
}

export default CartPage;
