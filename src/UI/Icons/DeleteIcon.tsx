import deleteIcon from '../../assets/icons/delete.svg';
import { PropClasses } from '../../types/classesTypes';
import cn from 'classnames';

function DeleteIcon({ propClasses }: PropClasses) {
  const classes = cn(...propClasses);

  return <img className={classes} src={deleteIcon} alt="rating" />;
}

export default DeleteIcon;
