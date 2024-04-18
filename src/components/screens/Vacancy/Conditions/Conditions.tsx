import { Title } from '@/components/ui/Typography';
import { FC } from 'react';
import { ConditionsProps } from '.';
import parse from 'html-react-parser';
import style from './Conditions.module.scss';

export const Conditions: FC<ConditionsProps> = ({ conditions, offers }) => {
  return (
    <div className={style.wrapper}>
      {conditions && (
        <div className={style.content}>
          <Title variant="h3" className={style.title}>
            Условия
          </Title>
          <div className={style.desc}>{parse(conditions)}</div>
        </div>
      )}
      {offers && (
        <div className={style.content}>
          <Title variant="h3" className={style.title}>
            Что мы предлагаем
          </Title>
          <div className={style.desc}>{parse(offers)}</div>
        </div>
      )}
    </div>
  );
};
