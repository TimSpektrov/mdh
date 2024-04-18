import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames'
import { LogoProps } from '.';

import logoImg from '@img/logo.svg'
import logoDarkImg from '@img/logo-dark.svg'
import style from './Logo.module.scss';
import { useRouter } from 'next/router';

export const Logo: FC<LogoProps> = ({ className, onClick, light, width, height }) => {

  const { route } = useRouter()
  const classes = cn(style.logo, className);
  
  if (route === '/') {
    return (
      <div className={classes}>
        <Image
          src={light ? logoDarkImg : logoImg}
          width={light ? (width ? width : logoDarkImg.width) : (width ? width : logoImg.width)}
          height={light ? (height ? height : logoDarkImg.height) : (height ? height : logoImg.height)}
          alt='MDH'
          priority
        />
      </div>
    )
  }

  return (
    <Link onClick={onClick} href='/' className={classes}>
      <Image
        src={light ? logoDarkImg : logoImg}
        width={light ? (width ? width : logoDarkImg.width) : (width ? width : logoImg.width)}
        height={light ? (height ? height : logoDarkImg.height) : (height ? height : logoImg.height)}
        alt='MDH'
        priority
      />
    </Link>
  );
};
