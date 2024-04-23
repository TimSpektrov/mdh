import { FC } from 'react';
import { MockupProps } from '.';
import Image from 'next/image';

import style from './Mockup.module.scss';
import mockupImg from './assets/mockup.png'
import { Text, Title } from '@/components/ui/Typography';

export const Mockup: FC<MockupProps> = ({ props }) => {
  const {title, description, image_url, image_alt} = props
  return (
    <div className={style.wrapper}>
      <div className={style.media}>
        <Image src={image_url} width={mockupImg.width} height={mockupImg.height} alt={image_alt} sizes='100vw, 50vw'/>
      </div>
      <div className={style.content}>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </div>
    </div>
  );
};
