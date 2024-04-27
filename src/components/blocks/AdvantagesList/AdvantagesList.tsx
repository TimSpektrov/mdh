import styles from './advantages-list.module.scss'
import cn from 'classnames';
import { NewTypography } from '@/components/ui/NewTypography';
import { addNbspParse } from '@/helpers';

export interface TAdvantagesItem {
  title: string;
  description: string;
  id: number
}

export interface TAdvantagesList {
  list: TAdvantagesItem[];
  specificClass: string;
}
export const AdvantagesList = ({ list, specificClass }: TAdvantagesList) => {
  return (
    <div
      className={cn(
        styles['advantages-list'],
        { ['advantages-bottom']: list.length % 2 === 0 },
        styles[specificClass]
      )}>
      {list.map(item => (
        <div
          className={styles['advantages-list__item']}
          key={item.id}
        >
          <NewTypography text={item.title} variant={'h3'} tag={'h3'} />
          <p className={styles['advantages-list__description']}>{ addNbspParse(item.description) }</p>
        </div>))}
    </div>
  )
}