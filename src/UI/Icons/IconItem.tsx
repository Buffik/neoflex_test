import cn from 'classnames';

type IcomItemProps = {
  propClasses?: string | Array<string>;
  linkToIcon: string;
  alt: string;
};

function IconItem({ propClasses, linkToIcon, alt }: IcomItemProps) {
  const classes = propClasses
    ? typeof propClasses === 'string'
      ? propClasses
      : cn(...propClasses)
    : '';

  return <img className={classes} src={linkToIcon} alt={alt} />;
}

export default IconItem;
