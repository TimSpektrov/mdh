import { FC } from 'react';
import styles from './works-list.module.scss'
import { NewTypography } from '@/components/ui/NewTypography';
import { IWorkItem, WorkItems } from './WorkItems';
import cn from 'classnames';

interface IWorksList {
  title?: string;
  list: IWorkItem[];
  specificClass?: string;
}
export const WorksListSection: FC<IWorksList> = ({title, list, specificClass = 'page'}) => {
  return (
    <section className={cn(styles.section, styles[specificClass])}>
      {title && (<NewTypography text={title} variant={'h2'} tag={'h2'} />)}
      <WorkItems list={list} specificClass={specificClass}/>
    </section>
  )
}