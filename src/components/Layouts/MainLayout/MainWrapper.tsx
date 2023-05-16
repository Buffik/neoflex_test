import React from 'react';
import styles from './MainWrapper.module.css';

type ChildrenProps = {
  children: React.ReactNode;
};

function MainLayout(props: ChildrenProps) {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
}

export default MainLayout;
