import React from 'react';
import styles from './Header.module.css';
import TextItem from '../../UI/TextItem/TextItem';
import LikeIcon from '../../UI/Icons/LikeIcon';
import CartIcon from '../../UI/Icons/CartIcon';
import Button from '../../UI/Button/Button';

function Header() {
  return (
    <div className={styles.wrapper}>
      <TextItem as="h1">qpick</TextItem>
      <div className={styles.headerIconsContainer}>
        <Button className={styles.headerIconsWrapper}>
          <>
            <LikeIcon propClasses={[styles.likeIcon]} />
            <TextItem className={styles.headerTextCount}>2</TextItem>
          </>
        </Button>
        <div className={styles.headerIconsWrapper}>
          <CartIcon propClasses={['cartIcon']} />
          <TextItem className={styles.headerTextCount}>2</TextItem>
        </div>
      </div>
    </div>
  );
}

export default Header;
