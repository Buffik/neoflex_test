import { useContext } from 'react';
import styles from './CartProductGroup.module.css';
import ProductCartItem from '../../components/ProductItem/ProductCartPage/ProductCartItem';
import DataContext from '../../context/DataContext';
import EmptyCart from '../../components/EmptyCart/EmptyCart';

function CartProductGroup() {
  const data = useContext(DataContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        {data && data.data.length ? (
          data.data.map((item) => {
            return (
              <ProductCartItem
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                count={item.count}
              />
            );
          })
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
}

export default CartProductGroup;
