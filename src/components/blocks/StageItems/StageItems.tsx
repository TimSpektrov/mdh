import { CSSProperties, FC, useEffect, useState } from 'react';
import styles from './stage-items.module.scss'
import cn from 'classnames';
import { motion } from 'framer-motion';
import { addNbspParse, toHtmlList } from '@/helpers';

export interface IStageItems {
  list: IStageItem[];
  specificClass?: string;
}

export interface IStageItem {
  id: number;
  title: string;
  description: string;
}

export const StageItems: FC<IStageItems> = ({ list, specificClass = 'page' }) => {
  const columns = list.length;
  const [activeTooltip, setActiveTooltip] = useState(-1)
  const [widthWindow, setWidthWindow] = useState(0)

  const changeLayout = 1200
  const resetActiveTooltip = () => {
    if(widthWindow >= changeLayout) {
      setActiveTooltip(-1)
      return false
    }
    return true
  }
  const handleTooltip = (num: number) => {
    if (resetActiveTooltip()) {
      setActiveTooltip(num === activeTooltip ? -1 : num)
    }
  }

  const handleAccordion = (num: number) => {
    if(widthWindow < changeLayout) {
      setActiveTooltip(num === activeTooltip ? -1 : num)
    }
  }
  useEffect(() => {
    setWidthWindow(window.innerWidth)
    window.addEventListener('resize', () => {
      setWidthWindow(window.innerWidth)
      resetActiveTooltip();
    })
  }, [widthWindow]);

  const parseList = list
    .map(item => {
      return ({
        id: item.id,
        title: item.title,
        description: toHtmlList(item.description),
      })
  })

  return(
    <div className={cn(styles.container, styles[specificClass])} style={{ '--columns': columns } as CSSProperties}>
      <div className={styles.overlay}>
         <div className={styles.overlay__item}></div>
         {parseList.map((_, i) => (
           <div
             key={i}
             className={styles.overlay__item}
             style={{left: `${((i + 1) / (columns)) * 100}%`}}
           ></div>
         ))}
       </div>

      <div
        className={cn(styles.items)}
      >
        {parseList.map((item, index) => (
          <div className={cn(styles['item-container'])} key={index}>
            <div
              className={
              cn(
                styles['stage-number'],
                styles[`stage-number-${index}`],
              )}
            >{index + 1} <span>этап</span></div>

            <div
              className={cn(
                styles.stage,
                {[styles['stage-active']]: activeTooltip === index},
                styles[`stage-${index}`]
              )}
              key={item.id}
            >
              <div className={styles.stage__heading} onClick={() => handleAccordion(index)}>
                {addNbspParse(item.title)}
                <div
                    role='button'
                    tabIndex={0}
                    className={cn(
                    styles.tooltip,
                  )}
                    onClick={() => handleTooltip(index)}
                  >
                    {index !== activeTooltip ?
                      (
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                          <path
                            d='M5.46289 5.84332C5.61471 5.3755 5.89303 4.95886 6.26693 4.63932C6.64082 4.31979 7.09562 4.11 7.58138 4.03293C8.06714 3.95587 8.56509 4.01468 9.01953 4.2028C9.47397 4.39091 9.86709 4.70111 10.1562 5.09896C10.4454 5.49681 10.619 5.96672 10.6577 6.45703C10.6963 6.94734 10.5983 7.43871 10.3751 7.87695C10.1518 8.3152 9.81212 8.68343 9.39278 8.94043C8.97343 9.19743 8.49118 9.33345 7.99935 9.33345V9.99988M8.03255 12.6667V12.7333L7.96615 12.7335V12.6667H8.03255Z'
                            stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                      ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M9.91728 9.91631L4.08398 4.08301M9.91732 4.08301L4.08398 9.91634" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      )}
                  </div>
              </div>
              <motion.div
                initial={{ opacity: widthWindow >= 1200 ? 1 : 0, height: 0 }}
                animate={{ opacity: activeTooltip === index ? 1 : widthWindow >= 1200 ? 1 : 0, height: activeTooltip === index ? "auto" : 0 }}
                exit={{ opacity: widthWindow >= 1200 ? 1 : 0, height: 0 }}
              >
                <div className={cn(
                  styles.stage__content,
                  { [styles['stage__content-last']] : index === columns - 1 }
                )}>
                  {addNbspParse(item.description)}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}