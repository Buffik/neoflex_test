import rubleIcon from '../../assets/icons/ruble.svg';
import { PropClasses } from '../../types/classesTypes';
import cn from 'classnames';

function RubleIcon({ propClasses }: PropClasses) {
  const classes = cn(...propClasses);

  return <img className={classes} src={rubleIcon} alt="rating" />;
}

export default RubleIcon;
