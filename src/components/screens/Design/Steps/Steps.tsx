import { FC } from 'react';
import { StepsProps } from '.';
import cn from 'classnames'
import Image from 'next/image';
import { Text, Title } from '@/components/ui/Typography';

import style from './Steps.module.scss';
import designStyle from './../Design.module.scss';

export const Steps: FC<StepsProps> = ({ data, title, image_url, image_alt }) => {
  return (
    <div className={style.wrapper}>
      <div className={cn(designStyle.pattern, designStyle.patternLeft)}></div>
      <div className={style.inner}>
        <div className={style.media}>
          <Image src={image_url} alt={image_alt} width={1920} height={1280} />
        </div>
        <div className={style.content}>
          <Title color='light'>{title}</Title>
          <div className={style.list}>
            {data.map(({ id, title, description }, index) => (
              <div key={id} className={style.step}>
                <div className={style.stepLabel}>{index + 1 + (' шаг').toUpperCase()}</div>
                <Title color='light' variant='h3' className={style.stepName}>
                  <span>{title}</span>
                  <span className={style.stepLine}></span>
                </Title>
                <Text className={style.stepDesc}>{description}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
