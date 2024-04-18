import { FC, useEffect, useState } from 'react';
import { LayoutProps } from '.';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';

import { Loader } from '@/components/ui/Loader';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

import { ScrollerMotion } from 'scroller-motion';
import { isMobile } from 'react-device-detect';
import { Grandis } from '@/styles/fonts';
import { useContactsDateStore } from '@/store/useContextDataStore';

const DynamicPopup = dynamic(() => import('@/components/ui/Popup/Popup').then(component => component.Popup))
const DynamicModal = dynamic(() => import('@/components/ui/Modal/Modal').then(component => component.Modal))
const DynamicCursor = dynamic(() => import('@/components/ui/Cursor/Cursor').then(component => component.Cursor))

export const Layout: FC<LayoutProps> = ({ children }) => {

  const [loader, setLoader] = useState(true)
  const [mobile, setMobile] = useState(false)
  const { route } = useRouter()
  const spring = { mass: 0.3, stiffness: 190, damping: 28, restDelta: .001, restSpeed: 20 }

  useEffect(() => { setLoader(false) }, [])

  useEffect(() => { setMobile(isMobile) }, [])

  const { fetchContacts } = useContactsDateStore(state => ({
    fetchContacts: state.fetchContacts,
  }))
  useEffect(() => {
    fetchContacts()
  }, []);

  return (
    <>
      <Loader loader={loader} />
      <DynamicPopup className={Grandis.variable} />
      <DynamicCursor />
      <div className="wrapper">
        <Header />
        {mobile ? (
          <>
            <main className="main">{children}</main>
            {route !== '/404' && <Footer />}
          </>
        ) : (
          <ScrollerMotion spring={spring}>
            <main className="main">{children}</main>
            {route !== '/404' && <Footer />}
          </ScrollerMotion>
        )}
      </div>
      <DynamicModal className={Grandis.variable}/>
    </>
  );
};
