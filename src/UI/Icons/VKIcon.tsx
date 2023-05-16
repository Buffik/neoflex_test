import vk from '../../assets/icons/vk.svg';
import { PropClasses } from '../../types/classesTypes';
import cn from 'classnames';

function VKIcon({ propClasses }: PropClasses) {
  const classes = cn(...propClasses);

  return <img className={classes} src={vk} alt="rating" />;
}

export default VKIcon;
