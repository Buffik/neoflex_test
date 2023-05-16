import React from 'react';
import styles from './Main.module.css';
type ChildrenProps = {
  children: React.ReactNode;
};

function Main(props: ChildrenProps) {
  const { children } = props;
  return <main className={styles.container}>{children}</main>;
}

export default Main;
