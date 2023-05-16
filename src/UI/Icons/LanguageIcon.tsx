import language from '../../assets/icons/world.svg';
import { PropClasses } from '../../types/classesTypes';
import cn from 'classnames';

function LanguageIcon({ propClasses }: PropClasses) {
  const classes = cn(...propClasses);

  return <img className={classes} src={language} alt="rating" />;
}

export default LanguageIcon;
