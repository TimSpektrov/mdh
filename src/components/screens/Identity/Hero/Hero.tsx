import { FC } from 'react';
import { HeroProps } from '.';
import { Title, Text } from '@/components/ui/Typography'


import style from './Hero.module.scss';
import parse from 'html-react-parser';

export const Hero: FC<HeroProps> = ({title, description, itemList}) => {
  return (
    <section className={style.wrapper}>
      <h1 className='invisible'>Разработка логотипов и фирменного стиля</h1>
      <div className={style.top}>
        <div className={style.title}>{title}</div>
      </div>
      <div className={style.bottom}>
        <Title variant='h2' accent='mint' className={style.subtitle}>{parse(description)}</Title>
        <Text tag='div' className={style.desc}>
          {itemList && itemList?.length > 0 && (<ul>
            {itemList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>)}
        </Text>
      </div>
    </section>
  );
};
