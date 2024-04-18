import { FC } from 'react';
import { StructureProps } from '.';
import style from './Structure.module.scss';

import structereImg from '@img/identity/structure.png'
import Image from 'next/image';
import { Text, Title } from '@/components/ui/Typography';
import parse from 'html-react-parser';

const data = [
  {
    count: '01', 
    title: 'Логотип',
    desc: 'Сформируем яркий имидж бренда в глазах вашей аудитории'
  },
  {
    count: '02',
    title: 'Фирменный стиль',
    desc: 'Поможем вашему бренду выделиться среди конкурентов'
  },
  {
    count: '03',
    title: 'Руководство по использованию',
    desc: 'Создадим подробную инструкцию, как правильно использовать логотип, сочетать фирменные цвета, шрифты и другие элементы стиля'
  }
]

export const Structure: FC<StructureProps> = ({title, image, items}) => {

  return (
    <section className={style.wrapper}>
      <div className={style.inner}>
        <div className={style.media}>
          <Image src={structereImg} alt='' width={structereImg.width} height={structereImg.height} />
        </div>
        <div className={style.content}>
          <Title color='light' accent='mint' className={style.title}>
            {parse(title)}
          </Title>
          <div className={style.list}>
            {items && items.map((item, index) => (
              <div key={index} className={style.item}>
                <div className={style.count}>{(`${index + 1}`.padStart(2, '0'))}</div>
                <div className={style.name}>
                  <Title color='light' variant='h3'>{parse(item.title)}</Title>
                  <span className={style.line} />
                </div>
                <Text color='light' tag='p' variant='main'>{parse(item.description)}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
