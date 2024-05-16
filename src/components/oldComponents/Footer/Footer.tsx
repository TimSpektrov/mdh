import { Fragment, forwardRef } from 'react';
import { FooterProps } from '.';
import cn from 'classnames';
import Link from 'next/link';
import { Logo } from '@/components/ui';

import data from '@json/data.json';
import contact from '@json/contacts.json';

import style from './Footer.module.scss';

export const Footer = forwardRef<HTMLDivElement, FooterProps>(({}, ref) => {
  const menu = data.navigation.filter(
    ({ showFooter, url }) => showFooter === true && url !== '#'
  );
  const socials = data.socials.filter(({ showFooter }) => showFooter === true);
  const contacts = contact.filter(({ showFooter }) => showFooter === true);

  const CurrentYear = new Date().getFullYear();

  return (
    <footer className={style.wrapper} ref={ref}>
      <Logo className={style.logo} width={190} height={36} />
      <div className={cn(style.content, 'grid')}>
        <div
          className={cn(
            style.first,
            'column column--md-4 column--xxl-3 column--xxxl-3'
          )}
        >
          <div className={style.list}>
            {menu.map(({ id, name, url }) => (
              <Link key={id} href={url} className={style.item}>
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="column column--md-4 column--xxl-3 column--xxxl-2">
          <div className={cn(style.list, style.social)}>
            {socials.map(({ id, name, url }) => (
              <Link
                className={style.item}
                href={url}
                key={id}
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="column column--md-4 column--xxl-6 column--xxxl-7">
          <div className={style.list}>
            {contacts.map(({ id, name, url }) => (
              <Fragment key={id}>
                {url ? (
                  <Link href={url} className={style.item}>
                    {name}
                  </Link>
                ) : (
                  <div className={style.item}>{name}</div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        <div>© MDH {CurrentYear} г.</div>
        <Link href="#" className={style.link}>
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
