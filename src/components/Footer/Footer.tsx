import Logo from '../../UI/Logo/Logo';
import Button from '../../UI/Button/Button';
import LanguageIcon from '../../UI/Icons/LanguageIcon';
import TextItem from '../../UI/TextItem/TextItem';

import styles from './Footer.module.css';
import VKIcon from '../../UI/Icons/VKIcon';
import TelegramIcon from '../../UI/Icons/TelegramIcon';
import WhatsAppIcon from '../../UI/Icons/WhatsAppIcon';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Logo />
      <div className={styles.linksWrapper}>
        <div className={styles.linksRowWrapper}>
          <Button as="a" href="/">
            <>Избранное</>
          </Button>
          <Button as="a" href="/">
            <>Корзина</>
          </Button>
          <Button as="a" href="/">
            <>Контакты</>
          </Button>
        </div>
        <div className={styles.linksRowWrapper}>
          <Button as="a" href="/">
            <>Условия сервиса</>
          </Button>
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
