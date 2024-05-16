import Head from 'next/head';
import { FC } from 'react';
import { ServicesComponentProps } from '.';
import { Feedback } from '@/components/oldComponents/Feedback';

export const ServicesComponent: FC<ServicesComponentProps> = () => {
  return (
    <>
      <Head>
        <title>Услуги</title>
        <meta name="description" content="Описание страницы со списком услуг" />
      </Head>
      <Feedback />
    </>
  );
};
