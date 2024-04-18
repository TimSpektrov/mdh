import { CSSProperties, FC, useState } from 'react';
import styles from './card-rates.module.scss'
import cn from 'classnames';
import check from '@img/svg/check.svg'
import { motion } from 'framer-motion';
import { addNbsp } from '@/helpers';
import parse from 'html-react-parser';
import { useModalStore } from '@/store/useModalStore';

export const CardRates: FC<any> = ({content}) => {
  const [activeButton, setActiveButton] = useState(0);
  const [activeHover, setActiveHover] = useState(0);
  const [toggleModal] = useModalStore((state) => [state.toggleModal]);

  const handleClickButton = (num: number) => {
    setActiveButton(num)
  }
  const handleHoverButton = (num: number) => {
    setActiveHover(num)
  }
  const handleLeaveButton = () => {
    setActiveHover(activeButton);
  }

  const advanced = content[activeButton].when.split('\r\n')
  return(
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading} style={{'--buttons': content.length} as CSSProperties}>
          <motion.div
            className={styles['heading-bg']}
            style={{
              transform: `translateX(${activeHover * 100}%)`,
              transition: "transform 0.3s ease-in-out",
          }}
          ></motion.div>
          {content.map((item: any, i: number) => (
            <motion.button
              key={i}
              className={cn(
                styles['heading-btn'],
                {[styles['heading-btn-active']]: activeButton === i}
              )}
              onClick={() => handleClickButton(i)}
              onMouseEnter={() => handleHoverButton(i)}
              onMouseLeave={() => handleLeaveButton()}
            >{item.audit_type}</motion.button>
          ))}
        </div>

        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key={activeButton}
          >
            <h2 className={styles.content__title}>{parse(addNbsp(content[activeButton].title))}</h2>
            <p className={styles.content__description}>{parse(addNbsp(content[activeButton].description))}</p>
            <ul className={styles.content__list}>
              <li className={styles.content__item}>
                <div className={cn(styles['content__item-img'], styles['content__item-img-watch'])}></div>
                <span className={styles['content__item-text']}>
                <span className={styles['content__item-text-bold']}>Срок: </span>
                  {parse(addNbsp(content[activeButton].term))}
              </span>
              </li>
              <li className={styles.content__item}>
                <div className={cn(styles['content__item-img'], styles['content__item-img-book'])}></div>
                <span className={styles['content__item-text']}>
                <span className={styles['content__item-text-bold']}>Результат: </span>
                  {parse(addNbsp(content[activeButton].result))}
              </span>
              </li>
            </ul>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          key={activeButton}
          className={styles.advanced}>
          <h3 className={styles.advanced__title}>
            Когда подойдет:
          </h3>
          <ul className={styles.advanced__list}>
            <div className={styles['advanced__list-container']}>
              {advanced.filter((el:string, i:number) => i < advanced.length / 2).map((item:string, i: number) => (
                <li className={styles.advanced__item} key={`${activeButton}-${i}`}>
                  <div className={styles['advanced__item-img']} style={{backgroundImage:check.src}}></div>
                  <span className={styles['advanced__item-text']}>
                {parse(addNbsp(item))}
              </span>
                </li>
              ))}
            </div>
            <div className={styles['advanced__list-container']}>
              {advanced.filter((el:string, i: number) => i >= advanced.length / 2).map((item:string, i: number) => (
                <li className={styles.advanced__item} key={`${activeButton}-${i}`}>
                  <div className={styles['advanced__item-img']} style={{backgroundImage:check.src}}></div>
                  <span className={styles['advanced__item-text']}>
                {parse(addNbsp(item))}
              </span>
                </li>
              ))}
            </div>
          </ul>
        </motion.div>
        <button className={styles.btn} onClick={toggleModal}>Заказать аудит</button>
      </div>
    </section>
  )
}