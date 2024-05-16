import { FC } from 'react';
import style from './Tags.module.scss';
import cn from 'classnames'
import { TagsProps } from '.';

export const Tags: FC<TagsProps> = ({ tags, className }) => {
  const classes = cn(
    style.tags,
    className
  )
  return (
    <ul className={classes}>
      {tags?.map(({id, name}, index) => (
        <li key={id+name+index} className={style.tag}>
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
};
