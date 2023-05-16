import React from 'react';
import Main from '../../components/Layouts/Main/Main';
import CartProductGroup from '../../modules/CartProductGroup/CartProductGroup';
import { headPhones } from '../../assets/data/headPhonesData';
import TotalCardPrice from '../../components/TotalCardPrice/TotalCardPrice';

import styles from './CartPage.module.css';
import TextItem from '../../UI/TextItem/TextItem';

function CartPage() {
  return (
    <>
      <Main>
        <TextItem className={styles.title}>корзина</TextItem>
        <div className={styles.wrapper}>
          <CartProductGroup data={headPhones} />
          <TotalCardPrice totalPrice={1000} />
        </div>
      </Main>
    </>
  );
}

export default CartPage;
