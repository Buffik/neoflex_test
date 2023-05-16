import React from 'react';
import styles from './ProductGroup.module.css';
import TextItem from '../../UI/TextItem/TextItem';
import { HeadPhonesCard } from '../../assets/data/model';
import ProductItem from '../../components/ProductItem/ProductMainPage/ProductItem';

type ProductGroupProps = {
  title: string;
  data: HeadPhonesCard[];
};

function ProductGroup({ title, data }: ProductGroupProps) {
  return (
    <div>
      <TextItem className={styles.headPhonesTitle}>{title}</TextItem>
      <div className={styles.wrapper}>
        {data.map((item) => {
          return (
            <ProductItem
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              prevPrice={item.prevPrice}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductGroup;
