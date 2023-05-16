import Logo from '../../UI/Logo/Logo';
import Button from '../../UI/Button/Button';
import LanguageIcon from '../../UI/Icons/LanguageIcon';
import TextItem from '../../UI/TextItem/TextItem';

import styles from './Footer.module.css';
import VKIcon from '../../UI/Icons/VKIcon';
import TelegramIcon from '../../UI/Icons/TelegramIcon';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../../UI/Icons/WhatsAppIcon';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Logo />
      <div className={styles.linksWrapper}>
        <div className={styles.linksRowWrapper}>
          <Link to="/">Избранное</Link>
          <Link to="/cart">Корзина</Link>
          <Link to="/">Контакты</Link>
        </div>
        <div className={styles.linksRowWrapper}>
          <Link to="/">Условия сервиса</Link>
          <div className={styles.linksLangWrapper}>
            <LanguageIcon propClasses={[styles.languageIcon]} />
            <TextItem className={styles.LangTextRus}>Рус</TextItem>
            <TextItem className={styles.LangTextEng}>Eng</TextItem>
          </div>
        </div>
      </div>
      <div className={styles.iconsWrapper}>
        <VKIcon propClasses={[styles.footerIcon]} />
        <TelegramIcon propClasses={[styles.footerIcon]} />
        <WhatsAppIcon propClasses={[styles.footerIcon]} />
      </div>
    </footer>
  );
}

export default Footer;
