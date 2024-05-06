import { forwardRef } from 'react';
import { FooterProps } from '.';
import cn from 'classnames';
import Link from 'next/link';
import { Logo } from '@/components/ui';

import data from '@json/data.json';

import style from './Footer.module.scss';
import { useContactsDateStore } from '@/store/useContextDataStore';

export const Footer = forwardRef<HTMLDivElement, FooterProps>(({}, ref) => {
  const menu = data.navigation.filter(
    ({ showFooter, url }) => showFooter === true && url !== '#'
  );
  const CurrentYear = new Date().getFullYear();
  const { contacts} = useContactsDateStore(state => ({
    contacts: state.contacts,
  }))

  const social = contacts?.social_media ? Object.entries(contacts.social_media).filter(item=> item[1]) : [];

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
            {social.map((item) => (
              <Link
                className={style.item}
                href={`${item[1]}`}
                key={item[0]}
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                {item[0]}
              </Link>
            ))}
          </div>
        </div>
        <div className="column column--md-4 column--xxl-6 column--xxxl-7">
          <div className={style.list}>
            {contacts?.phone && (
              <Link href={`tel:+${contacts.phone.match(/\d/g)?.join('')}`} className={style.item}>
                {contacts.phone}
              </Link>
            )}
            {contacts?.email && (
              <Link href={`mailto:${contacts.email}`} className={style.item}>
                {contacts.email}
              </Link>
            )}
            {contacts?.address_1 && (
              <div className={style.item}>{contacts.address_1}</div>
            )}
            {contacts?.address_2 && (
              <div className={style.item}>{contacts.address_2}</div>
            )}

            {/*{contacts1.map(({ id, name, url }) => (*/}
            {/*  <Fragment key={id}>*/}
            {/*    {url ? (*/}
            {/*      <Link href={url} className={style.item}>*/}
            {/*        {name}*/}
            {/*      </Link>*/}
            {/*    ) : (*/}
            {/*      <div className={style.item}>{name}</div>*/}
            {/*    )}*/}
            {/*  </Fragment>*/}
            {/*))}*/}
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
