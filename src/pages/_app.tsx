import { Layout } from '@/components/layouts/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import cn from 'classnames';

import { Grandis, GrandisExtended, Rubik } from 'src/styles/fonts';
import '@/styles/globals.scss';
import Image from 'next/image';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cn(Grandis.variable, GrandisExtended.variable, Rubik.variable)}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {process.env.NODE_ENV === 'production' && (
          <meta
            name="google-site-verification"
            content="hg7FDRuQ7jrXvYQQvN0P19BcF2xmkgW9Po9dhUGdWN4"
          />
        )}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            strategy='afterInteractive'
            id="gtm-script"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
            async={true}
          />
          <Script id="ym-script" strategy='afterInteractive'>
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              
              ym(${process.env.YM_COUNTER_ID}, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
              });

              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.GA_MEASUREMENT_ID}');
            `}
          </Script>
          <noscript>
            <div>
              <Image
                src={`https://mc.yandex.ru/watch/${process.env.YM_COUNTER_ID}`}
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
                unoptimized
              />
            </div>
          </noscript>
        </>
      )}
    </div>
  );
}
