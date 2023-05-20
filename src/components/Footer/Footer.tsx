import Logo from '../../UI/Logo/Logo';
import LanguageIcon from '../../assets/icons/world.svg';
import TextItem from '../../UI/TextItem/TextItem';

import styles from './Footer.module.css';
import VKIcon from '../../assets/icons/vk.svg';
import TelegramIcon from '../../assets/icons/tg.svg';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../../assets/icons/wa.svg';
import IconItem from '../../UI/Icons/IconItem';

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
            <IconItem
              propClasses={[styles.languageIcon]}
              linkToIcon={LanguageIcon}
              alt={'language icon'}
            />
            <TextItem className={styles.LangTextRus}>Рус</TextItem>
            <TextItem className={styles.LangTextEng}>Eng</TextItem>
          </div>
        </div>
      </div>
      <div className={styles.iconsWrapper}>
        <IconItem
          propClasses={[styles.footerIcon]}
          linkToIcon={VKIcon}
          alt="VKontakte"
        />
        <IconItem
          propClasses={[styles.footerIcon]}
          linkToIcon={TelegramIcon}
          alt="Telegram"
        />
        <IconItem
          propClasses={[styles.footerIcon]}
          linkToIcon={WhatsAppIcon}
          alt="WhatsApp"
        />
      </div>
    </footer>
  );
}

export default Footer;
