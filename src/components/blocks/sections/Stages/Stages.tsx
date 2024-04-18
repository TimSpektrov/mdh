import { FC } from 'react';
import cn from 'classnames';
import styles from './stages.module.scss';
import { IStageItem, IStageItems, StageItems } from '@/components/blocks/StageItems/StageItems';
import { NewTypography } from '@/components/ui/NewTypography/NewTypography';
import { addNbsp } from '@/helpers';

export interface IStages {
    title?: string;
    list: IStageItem[];
    specificClass?: string;
}
export const Stages: FC<IStages> = ({ list , title, specificClass = 'page' } ) => {
  return (
    <section className={cn(styles.section, styles[specificClass])}>
      <div className={cn(styles.container)}>
        {title && (<NewTypography text={title} variant={'h2'} tag={'h2'} />)}
        <StageItems list={list} specificClass={specificClass} />
      </div>
    </section>
  )
}