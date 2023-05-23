import { useContext } from 'react';
import styles from './CartProductGroup.module.css';
import ProductCartItem from 'components/ProductItem/ProductCartPage/ProductCartItem';
import { DataContext } from 'context/DataContext';
import EmptyCart from 'components/EmptyCart/EmptyCart';

function CartProductGroup() {
  const data = useContext(DataContext);
  return (
    <div className={styles.wrapper}>
      {data?.cartItems.length ? (
        data.cartItems.map(({ id, image, name, price, count }) => {
          return (
            <ProductCartItem
              key={id}
              id={id}
              image={image}
              name={name}
              price={price}
              count={count}
            />
          );
        })
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default CartProductGroup;
