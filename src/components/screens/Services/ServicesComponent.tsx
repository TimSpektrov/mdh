import Head from 'next/head';
import { FC } from 'react';
import { ServicesComponentProps } from '.';
import { NewFooterFeedback } from '@/components/ui/NewFooterFeedback';

export const ServicesComponent: FC<ServicesComponentProps> = () => {
  return (
    <>
      <Head>
        <title>Услуги</title>
        <meta name="description" content="Описание страницы со списком услуг" />
      </Head>
      <NewFooterFeedback />
    </>
  );
};
