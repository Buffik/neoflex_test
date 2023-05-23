import React from 'react';
import styles from './Container.module.css';

type ChildrenProps = {
  children: React.ReactNode;
};

function Container(props: ChildrenProps) {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
}

export default Container;
