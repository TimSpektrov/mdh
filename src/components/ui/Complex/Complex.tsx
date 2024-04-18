import { FC } from 'react';
import { ComplexProps } from '.';
import cn from 'classnames'
import { Text, Title } from '@/components/ui/Typography';

import style from './Complex.module.scss';
import parse from 'html-react-parser';

export const Complex: FC<ComplexProps> = ({ title, data, wrapClass, innerClass, columnClass }) => {

  const oneColumnData = data?.filter(({ column }) => column === 1)
  const twoColumnData = data?.filter(({ column }) => column === 2)

  return (
    <section className={cn(style.wrapper, wrapClass)}>
      <div className={cn(style.inner, innerClass)}>
        <Title accent='mint' color='light'>{parse(title)}</Title>
        <div className={style.grid}>
          <div className={cn(style.column, columnClass)}>
            {oneColumnData?.map(({ id, name, desc }) => (
              <div key={id} className={style.item}>
                <div className={style.content}>
                  <Title variant='h3' className={style.name}>{name}</Title>
                  <Text color='light'>{desc}</Text>
                </div>
              </div>
            ))}
          </div>
          <div className={cn(style.column, columnClass)}>
            {twoColumnData?.map(({ id, name, desc }) => (
              <div key={id} className={style.item}>
                <div className={style.content}>
                  <Title variant='h3' className={style.name}>{name}</Title>
                  <Text color='light'>{desc}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
