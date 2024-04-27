import { Title } from '@/components/ui/Typography';
import { FC } from 'react';
import { ConditionsProps } from '.';
import style from './Conditions.module.scss';
import { addNbspParse } from '@/helpers';

export const Conditions: FC<ConditionsProps> = ({ conditions, offers }) => {
  return (
    <div className={style.wrapper}>
      {conditions && (
        <div className={style.content}>
          <Title variant="h3" className={style.title}>
            Условия
          </Title>
          <div className={style.desc}>{addNbspParse(conditions)}</div>
        </div>
      )}
      {offers && (
        <div className={style.content}>
          <Title variant="h3" className={style.title}>
            Что мы предлагаем
          </Title>
          <div className={style.desc}>{addNbspParse(offers)}</div>
        </div>
      )}
    </div>
  );
};
