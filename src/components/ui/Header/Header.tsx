import { FC, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useScrollDirection } from 'react-use-scroll-direction';
import { HeaderProps } from '.';
import cn from 'classnames';
import { Burger, Button, Locale, Logo } from '@/components/ui';
import { usePathname } from 'next/navigation';

import { useScrollbarWidth } from '@/hooks/useScrollbarWidth';
import { useOverlaySize } from '@/hooks/useOverlaySize';

import { useMenuStore } from '@/store/useMenuStore';
import { useModalStore } from '@/store/useModalStore';

import style from './Header.module.scss';
import { HorisontalScrollFilter } from '@/components/ui/HorisontalScrollFilter';
import { useFilterStore } from '@/store/useFilterStore';

const DynamicMenu = dynamic(() =>
  import('@/components/ui/Menu').then((mod) => mod.Menu)
);

export const Header: FC<HeaderProps> = () => {
  const [showMenu, toggleMenu, closeMenu] = useMenuStore((state) => [
    state.showMenu,
    state.toggleMenu,
    state.closeMenu
  ]);
  const [toggleModal] = useModalStore((state) => [state.toggleModal]);
  const [showFilter] = useFilterStore((state) => [state.showFilter]);
  const scrollbarWidth = useScrollbarWidth();
  const { overlaySize } = useOverlaySize();
  const pathName = usePathname();
  const { isScrollingUp, isScrollingDown } = useScrollDirection();

  const header = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const headerClass = cn(style.header, style.show);

  useEffect(() => {
    const bodyPosY = document?.body.getBoundingClientRect().top;

    if (bodyPosY && bodyPosY >= -62) {
      header.current?.classList.add(style.show);
    } else {
      if (pathName !== '/works') {
        isScrollingDown && header.current?.classList.remove(style.show);
        isScrollingUp && header.current?.classList.add(style.show);
      } else {
        header.current?.classList.add(style.show);
      }
    }
  });

  useEffect(() => {
    const getAppHeight = () => {
      if (typeof window !== 'undefined') {
        const doc = document?.documentElement;
        doc.style.setProperty('--app-height', `${window.innerHeight}px`);
      }
    };
    getAppHeight();
    window.addEventListener('resize', getAppHeight);
    return () => window.removeEventListener('resize', getAppHeight);
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.setAttribute(
        'style',
        `overflow: hidden !important; padding-right: ${scrollbarWidth}px`
      );
      overlay.current?.setAttribute(
        'style',
        `opacity: 1; width: ${overlaySize}px; height: ${overlaySize}px`
      );
      header.current?.setAttribute(
        'style',
        `padding-right: ${scrollbarWidth}px`
      );
    } else {
      setTimeout(() => {
        document.body.removeAttribute('style');
        overlay.current?.removeAttribute('style');
        header.current?.removeAttribute('style');
      }, 500);
    }
  }, [showMenu, overlaySize, scrollbarWidth]);

  return (
    <>
      <header className={headerClass} ref={header}>
        <div className={style.inner}>
          <Logo className={style.logo} onClick={closeMenu} />
          <Locale className={style.lang} />
          <Button color="white" className={style.btn} onClick={toggleModal}>
            Работать с нами
          </Button>
          <Burger active={showMenu} onClick={toggleMenu} />
        </div>
        {pathName === '/works' && (
          <HorisontalScrollFilter
            variant="dark"
            className={cn(style.filter, showFilter && !showMenu && style.show)}
          />
        )}
        <DynamicMenu />
      </header>
      <div className={style.overlay} ref={overlay}></div>
    </>
  );
};
