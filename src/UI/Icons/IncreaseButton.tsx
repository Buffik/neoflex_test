import incr from '../../assets/icons/increaseButton.svg';
import { PropClasses } from '../../types/classesTypes';
import cn from 'classnames';

function IncreaseButton({ propClasses }: PropClasses) {
  const classes = cn(...propClasses);

  return <img className={classes} src={incr} alt="rating" />;
}

export default IncreaseButton;
