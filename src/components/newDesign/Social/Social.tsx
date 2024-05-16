import { FC } from 'react';
import { SocialProps } from '.';
import cn from "classnames";

import style from './Social.module.scss';
import Link from 'next/link';


export const Social: FC<SocialProps> = ({ className, links, color }) => {
  const wrapClass = cn(
    style.social,
    className
  );
  const itemClass = cn(
    style.socialItem,
    'link',
    style[color]
  )
  return (
    <div className={wrapClass}>
      {links.map(item => (
        <Link className={itemClass} href={item.url} key={item.id} rel="noopener noreferrer nofollow" target="_blank">{item.name}</Link>
      ))}
    </div>
  );
};
