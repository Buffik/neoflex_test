import { Link } from 'react-router-dom';
import Main from '../../components/Layouts/Main/Main';
import TextItem from '../../UI/TextItem/TextItem';
import Button from '../../UI/Button/Button';

import styles from './PageNotFound.module.css';

function PageNotFound() {
  return (
    <Main>
      <TextItem className={styles.title} as="h1">
        Упс! Что-то пошло не так
      </TextItem>
      <Link className={styles.link} to="/">
        Вернуться на главную страницу
      </Link>
    </Main>
  );
}

export default PageNotFound;
