import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import TextItem from '../../UI/TextItem/TextItem';
import LikeIcon from '../../assets/icons/like.svg';
import CartIcon from '../../assets/icons/cart.svg';
import Button from '../../UI/Button/Button';
import Logo from '../../UI/Logo/Logo';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import IconItem from '../../UI/Icons/IconItem';
import handleSessionStorageData from '../../utils/handleSessionStorageData';

function Header() {
  const data = useContext(DataContext);
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    if (data?.cartItems)
      setItemsInCart(handleSessionStorageData.countItemsInCart(data.cartItems));
  }, [data]);

  return (
    <header className={styles.wrapper}>
      <Logo />
      <div className={styles.headerIconsContainer}>
        <Button className={styles.headerIconsWrapper}>
          <>
            <IconItem linkToIcon={LikeIcon} alt={'like icon'} />
            <TextItem className={styles.headerTextCount}>2</TextItem>
          </>
        </Button>
        <Link to="/cart" className={styles.headerIconsWrapper}>
          <IconItem linkToIcon={CartIcon} alt={'cart icon'} />
          <TextItem className={styles.headerTextCount}>{itemsInCart}</TextItem>
        </Link>
      </div>
    </header>
  );
}

export default Header;
