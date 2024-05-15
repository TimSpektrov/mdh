import styles from './hero.module.scss'
import cn from 'classnames';
import { motion } from 'framer-motion';
import { addNbspParse } from '@/helpers';
interface IHero {
  title: string;
  description: string;
  specificClass: string;
}

const animTitle = {
  hidden: { y: '120%' },
  visible: (custom: number) => ({
    y: '.16em',
    transition: { delay: custom * 0.4, easy: 'circOut', duration: 1 }
  })
}
const animTitle2 = {
  hidden: { y: '101%' },
  visible: (custom: number) => ({
    y: '.13em',
    transition: { delay: custom * 0.4, easy: 'circOut', duration: 1 }
  })
}

const animDescription = {
  hidden: { opacity: 0, y: '40%' },
  visible: (custom: number) => ({
    opacity: 1,
    y: '0',
    transition: { delay: custom * 0.4, easy: 'circOut', duration: 1 }
  })
}

export const Hero = ({ title, description, specificClass = 'page'}: IHero) => {
  const arrTitle = title.split('<br>') // для стилизации 2х и более строк

  return (
    <motion.section
      className={cn(styles.hero, styles[specificClass])}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: .8 }}
    >
      <div className={styles.hero__indent}></div>
      <h1 className={styles.hero__title}>
        {arrTitle.length > 0 && arrTitle.map((title, index) => (
          <div className={styles['hero__title-container']} key={index}>
            <motion.div
              key={index}
              variants={index === 0 ? animTitle : animTitle2}
              custom={1 + index}
            >{title}</motion.div>
          </div>
          ))}
      </h1>
      <div className={styles.hero__description}>
        <div className={cn(styles['hero__description-wrapper'], { [styles['hero__description-wrapper-padding']]: arrTitle.length > 1 })}>
          <motion.p
            className={styles['hero__description-text']}
            variants={animDescription}
            custom={arrTitle.length + 2}
          >
            {addNbspParse(description)}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};