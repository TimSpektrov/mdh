import { FC } from 'react';
import { FaqProps } from '.';
import Image from 'next/image';
import { Title, Text } from "@/components/ui/Typography";

import faqImg from '@img/about/about-faq.jpg'
import style from './Faq.module.scss';

export const Faq: FC<FaqProps> = () => {
  return (
    <section className={style.wrapper + ' grid'}>
      <div className={style.media + ' column column--xxl-6'}>
        <Image
          className={style.img}
          src={faqImg}
          alt={''}
          width={faqImg.width}
        />
      </div>
      <div className={style.content + ' column column--lg-10 column--xxl-6'}>
        <Title color='light' accent='orange'><span>А что делать,</span> если ещё нет продукта, который нужен именно вам?</Title>
        <div className={style.desc}>
          <Title variant='h3' color='light' className={style.title}>Вы можете создать его сами!</Title>
          <Text>MDH существует для тех, кто не ждёт, пока его историю напишет кто-то, а пишет её сам. Все ваши самые неожиданные, невероятные и смелые решения и идеи найдут воплощение в нашей совместной работе.</Text>
          <Text>Даже если у вас есть просто идея будущего продукта и ясное понимание, что он нужен вам и другим людям — мы поможем в воплощении вашей задумки в реальность.</Text>
          <Title variant='h3' color='light' className={style.title}>Мы верим в то, что идеи наших клиентов заслуживают того, чтобы войти в цифровую историю.</Title>
          <Text>Главное, что вы — становитесь полноценным участником процесса. Мы всегда готовы вместе с вами «докрутить» концепцию продукта и предусмотреть все детали для грамотного воплощения замысла.</Text>
        </div>
      </div>
    </section>
  );
};
