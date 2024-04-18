import { FC, Fragment } from 'react';
import { MenuProps } from '.';
import cn from 'classnames'
import Link from 'next/link';
import { Button, Locale, Social } from '@/components/ui';
import { useRouter } from 'next/router';

import data from "@json/data.json";
import contact from '@json/contacts.json';
import { useMenuStore } from '@/store/useMenuStore';
import { useModalStore } from '@/store/useModalStore';
import style from './Menu.module.scss';

export const Menu: FC<MenuProps> = () => {

  const [showMenu, toggleMenu] = useMenuStore(state => [state.showMenu, state.toggleMenu])
  const toggleModal = useModalStore(state => state.toggleModal)
  const router = useRouter();

  const scrollToServices = (e: any) => {
    e.preventDefault()
    toggleMenu()
    router.push('/#services');
    setTimeout(() => {
      const services = document?.getElementById('services')?.getBoundingClientRect().y
      window.scrollTo(0, Number(services) + window.scrollY)
    }, 1000);
  }

  const contacts = contact.filter(({ showHeader }) => showHeader === true)
  const menu = data.navigation.filter(({ showHeader, url }) => showHeader === true && url !== '#')
  const socials = data.socials.filter(({ showHeader }) => showHeader === true)

  const classes: string = cn(style.menu, showMenu && style.show)

  return (
    <div className={classes}>

      <div className={style.inner}>

        <div className={style.pattern}></div>

        <div className={style.top}>
          <div className={style.nav}>
            {menu.map(({ id, name, url }) => (
              <div key={id} className={style.navItem}>
                <Link
                  onClick={url === '/#services' ? scrollToServices : toggleMenu}
                  href={url}
                  scroll={url === '/#services' ? false : true}
                  className={style.navLink}
                >{name}</Link>
              </div>
            ))}
          </div>
          <Button color='white' className={style.btn} onClick={toggleModal}>Работать с нами</Button>
        </div>

        <div className={style.bottom}>
          <Locale className={style.locale} />
          <div className={style.links}>
            {contacts.map(({ id, name, url }) => (
              <Fragment key={id}>
                {url
                  ? <Link href={url} className={`${style.linksItem} link`}>{name}</Link>
                  : <div className={`${style.linksItem} link`}>{name}</div>
                }
              </Fragment>
            ))}
          </div>
          <Social links={socials} className={style.social} color='light' />
        </div>

      </div>
    </div>
  );
};
