import { FC } from 'react';
import { GoalProps } from '.';
import style from './Goal.module.scss';
import { NewTypography } from '@/components/ui/NewTypography';


export const Goal: FC<GoalProps> = ({title, list}) => {
  return (
    <section className={style.section}>
        {title && (
          <NewTypography text={title} variant={'h2'} tag={'h2'} />
        )}

        <div className={style.list} >
          {list.map(({title, description}, i) => (
            <div className={style.item} key={i}>
              <div className={style['item-num']}>
                {('' + (i + 1)).padStart(2, '00')}
                <div className={style.delimiter} />
              </div>

              <NewTypography text={title} variant={'h3'} tag={'h3'}/>
              <NewTypography text={description} variant={'p'} tag={'p'}/>
            </div>
          ))}

        </div>
    </section>
  );
};
