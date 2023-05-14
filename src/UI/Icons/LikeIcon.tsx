import likeIcon from '../../assets/icons/like.svg';
import { PropClasses } from '../../types/classesTypes';
import cn from 'classnames';

function LikeIcon({ propClasses }: PropClasses) {
  const classes = cn(...propClasses);

  return <img className={classes} src={likeIcon} alt="rating" />;
}

export default LikeIcon;
