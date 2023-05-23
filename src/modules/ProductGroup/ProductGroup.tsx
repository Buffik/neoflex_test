import styles from './ProductGroup.module.css';
import TextItem from 'UI/TextItem/TextItem';
import { HeadPhonesCard } from 'assets/data/model';
import ProductItem from 'components/ProductItem/ProductMainPage/ProductItem';

type ProductGroupProps = {
  title: string;
  data: HeadPhonesCard[];
};

function ProductGroup({ title, data }: ProductGroupProps) {
  return (
    <div>
      <TextItem className={styles.headPhonesTitle}>{title}</TextItem>
      <div className={styles.wrapper}>
        {data.map(({ id, image, name, price, prevPrice, rating }) => {
          return (
            <ProductItem
              key={id}
              id={id}
              image={image}
              name={name}
              price={price}
              prevPrice={prevPrice}
              rating={rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductGroup;
