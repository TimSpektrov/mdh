import { FC } from 'react';
import cn from 'classnames';
import styles from './text-image-block.module.scss'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { useModalStore } from '@/store/useModalStore';
import { addNbspParse } from '@/helpers';

const imageVariant = {
  hidden: {
    opacity: 0,
    y: '15%'
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      easy: 'easyOut',
      duration: .7,
      opacity: { duration: .35 }
    }
  }
}

const textVariants = {
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeOut'
    }
  },
  hidden: {
    opacity: 0
  }
};

const groupVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: .5
    }
  }
}
interface ITextImageBlock {
  text: string[];
  url: string;
  alt: string;
  specificClass: string;
  buttonModal?: boolean;
}
export const TextImageBlock: FC<ITextImageBlock> = ({text, url, alt, specificClass, buttonModal = false}) => {
  const [toggleModal] = useModalStore(state => [state.toggleModal])
  return (
    <motion.section
      className={cn(styles.section, styles[specificClass])}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: .5, once: true }}
    >
      <motion.div className={styles.left} variants={groupVariants}>
        {text.map((item,i) =>(
          <motion.div
            className={styles['content-item']}
            key={i}
            variants={textVariants}
          >
            {addNbspParse(item)}
          </motion.div>
      ))}
        {buttonModal && (<motion.div variants={textVariants} className={styles['btn-group']}>
          <Button color='orange' onClick={toggleModal}>Работать с нами</Button>
        </motion.div>)}
      </motion.div>

        <motion.div
          className={styles.right}
          initial='hidden'
          whileInView='visible'
          variants={imageVariant}
          viewport={{ amount: .5, once: true }}
        >
          <Image className={styles.image}
            src={url}
            alt={alt}
            width={1124}
            height={750}
          />
        </motion.div>
      <div className={styles['pattern-bg']}></div>
    </motion.section>
  )
}