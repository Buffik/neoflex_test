import { Link } from 'react-router-dom';

import styles from './Logo.module.css';
import TextItem from 'UI/TextItem/TextItem';

function Logo() {
  return (
    <Link to="/">
      <TextItem className={styles.title} as="h1">
        qpick
      </TextItem>
    </Link>
  );
}

export default Logo;
