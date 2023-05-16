import React from 'react';
import { HeadPhonesCard } from '../../assets/data/model';
import TextItem from '../../UI/TextItem/TextItem';

import styles from './CartProductGroup.module.css';
import ProductCartItem from '../../components/ProductItem/ProductCartPage/ProductCartItem';

type ProductGroupProps = {
  data: HeadPhonesCard[];
};

function CartProductGroup({ data }: ProductGroupProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        {data.map((item) => {
          return (
            <ProductCartItem
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              count={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CartProductGroup;
