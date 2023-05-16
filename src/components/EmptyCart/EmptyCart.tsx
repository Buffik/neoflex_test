import { Link } from 'react-router-dom';
import TextItem from '../../UI/TextItem/TextItem';
import styles from './EmptyCart.module.css';

function EmptyCart() {
  return (
    <div className={styles.wrapper}>
      <TextItem
        className={styles.title}
        as="h2"
      >{`Ваша корзина пуста :(`}</TextItem>
      <Link className={styles.link} to="/">
        Вернуться на главную страницу
      </Link>
    </div>
  );
}

export default EmptyCart;
