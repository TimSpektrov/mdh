import { FC } from 'react';
import { StepsProps } from '.';
import cn from 'classnames'
import Image from 'next/image';
import { Text, Title } from '@/components/ui/Typography';

import style from './Steps.module.scss';
import designStyle from './../Design.module.scss';

export const Steps: FC<StepsProps> = ({ data, title, image }) => {
  return (
    <div className={style.wrapper}>
      <div className={cn(designStyle.pattern, designStyle.patternLeft)}></div>
      <div className={style.inner}>
        <div className={style.media}>
          <Image src={image} alt='' width={image.width} height={image.height} />
        </div>
        <div className={style.content}>
          <Title color='light'>{title}</Title>
          <div className={style.list}>
            {data.map(({ id, name, desc }, index) => (
              <div key={id} className={style.step}>
                <div className={style.stepLabel}>{index + 1 + (' шаг').toUpperCase()}</div>
                <Title color='light' variant='h3' className={style.stepName}>
                  <span>{name}</span>
                  <span className={style.stepLine}></span>
                </Title>
                <Text className={style.stepDesc}>{desc}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
