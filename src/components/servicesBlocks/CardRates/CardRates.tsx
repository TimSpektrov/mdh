import { CSSProperties, FC, useEffect, useState } from 'react';
import styles from './card-rates.module.scss'
import cn from 'classnames';
import check from '@img/svg/check.svg'
import { motion } from 'framer-motion';
import { addNbspParse } from '@/helpers';
import { useModalStore } from '@/store/useModalStore';
import { useSelectStore } from '@/store/useSelectStore';

export const CardRates: FC<any> = ({content}) => {
  const [activeButton, setActiveButton] = useState(0);
  const [activeHover, setActiveHover] = useState(0);
  const { toggleModal, showModal } = useModalStore()
  const { selectItem, unselectItem, items } = useSelectStore()

  useEffect(() => {
    !showModal && unselectItem()
  }, [showModal, unselectItem])
  const handleClickButton = (num: number) => {
    setActiveButton(num)
    setActiveHover(num)
  }
  const openModal = () => {
    const title = content[activeButton].audit_type;
    const item = items.filter(item => item.title === title)
    toggleModal();
    if(items.length > 0) {
      selectItem(Number(item[0].id));
    }
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
            >{addNbspParse(item.audit_type)}</motion.button>
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
            <h2 className={styles.content__title}>{addNbspParse(content[activeButton].title)}</h2>
            <p className={styles.content__description}>{addNbspParse(content[activeButton].description)}</p>
            <ul className={styles.content__list}>
              <li className={styles.content__item}>
                <div className={cn(styles['content__item-img'], styles['content__item-img-watch'])}></div>
                <span className={styles['content__item-text']}>
                  <span className={styles['content__item-text-bold']}>Срок: </span>
                  {addNbspParse(content[activeButton].term)}
                </span>
              </li>
              <li className={styles.content__item}>
                <div className={cn(styles['content__item-img'], styles['content__item-img-book'])}></div>
                <span className={styles['content__item-text']}>
                  <span className={styles['content__item-text-bold']}>Результат: </span>
                  {addNbspParse(content[activeButton].result)}
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
              {advanced.filter((_:string, i:number) => i < advanced.length / 2).map((item:string, i: number) => (
                <li className={styles.advanced__item} key={`${activeButton}-${i}`}>
                  <div className={styles['advanced__item-img']} style={{backgroundImage:check.src}}></div>
                  <span className={styles['advanced__item-text']}>
                    {addNbspParse(item)}
                  </span>
                </li>
              ))}
            </div>
            <div className={styles['advanced__list-container']}>
              {advanced.filter((_:string, i: number) => i >= advanced.length / 2).map((item:string, i: number) => (
                <li className={styles.advanced__item} key={`${activeButton}-${i}`}>
                  <div className={styles['advanced__item-img']} style={{backgroundImage:check.src}}></div>
                  <span className={styles['advanced__item-text']}>
                    {addNbspParse(item)}
                  </span>
                </li>
              ))}
            </div>
          </ul>
        </motion.div>
        <button className={styles.btn} onClick={openModal}
        >Заказать аудит</button>
      </div>
    </section>
  )
}