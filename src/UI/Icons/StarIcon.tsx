import star from '../../assets/icons/star.svg';
import { PropClasses } from '../../types/classesTypes';
import cn from 'classnames';

function StarIcon({ propClasses }: PropClasses) {
  const classes = cn(...propClasses);

  return <img className={classes} src={star} alt="rating" />;
}

export default StarIcon;
