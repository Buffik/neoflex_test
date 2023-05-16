import React from 'react';
import styles from './Header.module.css';
import TextItem from '../../UI/TextItem/TextItem';
import LikeIcon from '../../UI/Icons/LikeIcon';
import CartIcon from '../../UI/Icons/CartIcon';
import Button from '../../UI/Button/Button';
import Logo from '../../UI/Logo/Logo';

function Header() {
  return (
    <header className={styles.wrapper}>
      <Logo />
      <div className={styles.headerIconsContainer}>
        <Button className={styles.headerIconsWrapper}>
          <>
            <LikeIcon propClasses={['']} />
            <TextItem className={styles.headerTextCount}>2</TextItem>
          </>
        </Button>
        <Button className={styles.headerIconsWrapper}>
          <>
            <CartIcon propClasses={['cartIcon']} />
            <TextItem className={styles.headerTextCount}>2</TextItem>
          </>
        </Button>
      </div>
    </header>
  );
}

export default Header;
