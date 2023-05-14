import cartIcon from '../../assets/icons/cart.svg';
import { PropClasses } from '../../types/classesTypes';
import cn from 'classnames';

function CartIcon({ propClasses }: PropClasses) {
  const classes = cn(...propClasses);

  return <img className={classes} src={cartIcon} alt="rating" />;
}

export default CartIcon;
