import styles from './stages-redesign.module.scss'
import cn from 'classnames';
import { NewTypography } from '@/components/ui/NewTypography';
import { addNbspParse } from '@/helpers';
interface IStagesRedesign {
  list: IStagesRedesignItem[];
  specificClass?: string;
  title?: string;
}

interface IStagesRedesignItem {
  id: number;
  title: string;
  description: string;
}
export const StagesRedesign = ({list, specificClass = 'page', title}: IStagesRedesign) => {
  return (
    <section className={cn(styles.section, styles[specificClass])}>
      {title && <NewTypography text={title} variant={'h2'} tag={'h2'}/>}

      <div className={cn(styles.container)}>
        {list.map((item) => (
          <div className={styles.card} key={item.id}>
            <NewTypography text={item.title} variant={'h3'} tag={'h3'}/>
            <p className={styles['card-description']}>{ addNbspParse(item.description) }</p>
          </div>
        ))}
      </div>
    </section>
  )
}