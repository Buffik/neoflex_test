import wa from '../../assets/icons/wa.svg';
import { PropClasses } from '../../types/classesTypes';
import cn from 'classnames';

function WhatsAppIcon({ propClasses }: PropClasses) {
  const classes = cn(...propClasses);

  return <img className={classes} src={wa} alt="rating" />;
}

export default WhatsAppIcon;
