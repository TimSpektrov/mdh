import { FC } from 'react';
import { MockupProps } from '.';
import Image from 'next/image';

import style from './Mockup.module.scss';
import mockupImg from './assets/mockup.png'
import { Text, Title } from '@/components/ui/Typography';

export const Mockup: FC<MockupProps> = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.media}>
        <Image src={mockupImg} width={mockupImg.width} height={mockupImg.height} alt='Анализируем рынок и ваш бизнес' sizes='100vw, 50vw'/>
      </div>
      <div className={style.content}>
        <Title>Анализируем рынок и ваш бизнес</Title>
        <Text>Создаём дизайн и представляем полностью готовый для использования продукт</Text>
      </div>
    </div>
  );
};
