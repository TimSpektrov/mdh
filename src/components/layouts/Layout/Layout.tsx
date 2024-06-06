import { FC, useEffect, useState } from 'react';
import { LayoutProps } from '.';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';

import { Loader } from '@/components/ui/Loader';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/newDesign/Footer';

import { ScrollerMotion } from 'scroller-motion';
import { isMobile } from 'react-device-detect';
import { Grandis } from '@/styles/fonts';
import { useContactsDateStore } from '@/store/useContextDataStore';
import { usePageDateStore } from '@/store/usePageDataStore';
import { springLayout } from '@/helpers/animation';

const DynamicPopup = dynamic(() => import('@/components/ui/Popup/Popup').then(component => component.Popup))
const DynamicModal = dynamic(() => import('@/components/oldComponents/Modal').then(component => component.Modal))
const DynamicCursor = dynamic(() => import('@/components/ui/Cursor/Cursor').then(component => component.Cursor))

export const Layout: FC<LayoutProps> = ({ children }) => {

  // const [loader, setLoader] = useState(true)
  const [mobile, setMobile] = useState(false)
  const { route } = useRouter()
  useEffect(() => { setMobile(isMobile) }, [])

  const { fetchContacts, loadingData } = useContactsDateStore(state => ({
    fetchContacts: state.fetchContacts,
    loadingData: state.loading
  }))
  const {loading, content} = usePageDateStore(state => ({
    loading: state.loading,
    content: state.content,
    isLoadContent: state.isLoadContent,
    setIsLoadContent: state.setIsLoadContent,
  }))
  useEffect(() => {
    fetchContacts()
  }, []);

  let isLoader = loading || loadingData || (!content && typeof content !== 'object' && route !== '/services/product-design' && route !== '/contact')
  return (
    <>
      {/*<Loader loader={loading || loadingData || (!content && route !== '/services/product-design' && route !== '/contact')} />*/}
      <Loader loader={isLoader} />
      <DynamicPopup className={Grandis.variable} />
      <DynamicCursor />
      <div className="wrapper">
        <Header />
        {mobile ? (
          <>
            <main className="main">{children}</main>
            {(isLoader || route !== '/404') && <Footer />}
          </>
        ) : (
          <ScrollerMotion spring={springLayout}>
            <main className="main">{children}</main>
            {isLoader || route !== '/404' && <Footer />}
          </ScrollerMotion>
        )}
      </div>
      <DynamicModal className={Grandis.variable}/>
    </>
  );
};
