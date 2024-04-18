import { FC } from 'react';
import { LocaleProps } from '.';
import cn from 'classnames'
import Link from 'next/link';

import style from './Locale.module.scss';

export const Locale: FC<LocaleProps> = ({ className }) => {

  const classes = cn( style.lang, className );

  return (
    <div className={classes}>
      <span className={`${style.item} ${style.active}`}>Ru</span>
      <Link className={style.item} href="/">En</Link>
    </div>
  );
};
