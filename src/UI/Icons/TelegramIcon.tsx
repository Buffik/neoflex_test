import tg from '../../assets/icons/tg.svg';
import { PropClasses } from '../../types/classesTypes';
import cn from 'classnames';

function TelegramIcon({ propClasses }: PropClasses) {
  const classes = cn(...propClasses);

  return <img className={classes} src={tg} alt="rating" />;
}

export default TelegramIcon;
