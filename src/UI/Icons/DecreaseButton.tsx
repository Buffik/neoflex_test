import decr from '../../assets/icons/decreaseButton.svg';
import { PropClasses } from '../../types/classesTypes';
import cn from 'classnames';

function DecreaseButton({ propClasses }: PropClasses) {
  const classes = cn(...propClasses);

  return <img className={classes} src={decr} alt="rating" />;
}

export default DecreaseButton;
