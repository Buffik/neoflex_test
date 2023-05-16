import { Link } from 'react-router-dom';
import TextItem from '../TextItem/TextItem';

import styles from './Logo.module.css';

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
