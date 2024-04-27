import { FC } from 'react';
import { TextBlockProps } from '.';
import Image from 'next/image';
import cn from 'classnames'
import { Text, Title } from '@/components/ui/Typography';
import { Button } from '@/components/ui';
import { useModalStore } from '@/store/useModalStore'
import { motion } from 'framer-motion';
import style from './TextBlock.module.scss';
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

const titleVariant = {
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: .9,
      ease: 'easeOut'
    }
  },
  hidden: {
    y: '100%',
    opacity: 0
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

export const TextBlock: FC<TextBlockProps> = ({
  data,
  color = 'light',
  paddingSize = 'large',
  titlePosition = 'content',
  showButton = true,
  imagePosition = 'right',
  imageFilter,
  wrapClass,
  mediaClass,
  buttonClass,
  textClass,
  titleClass,
  specificClass = 'block'
}) => {
  const [toggleModal] = useModalStore(state => [state.toggleModal])

  const classes = cn(
    style.wrapper,
    style[color],
    paddingSize && style['p-' + paddingSize],
    imagePosition && style['img-' + imagePosition],
    wrapClass,
    style[specificClass]
  )

  const mediaClasses = cn(
    style.media,
    imageFilter && style[imageFilter],
    mediaClass
  )

  const textColor = color === 'light' ? 'dark' : 'light'

  return (
    <motion.section className={classes} initial='hidden' whileInView='visible' viewport={{ amount: .5, once: true }} >
      {titlePosition === 'top' && (
        <Title className={cn(style.title, titleClass)} variant='h2' color={textColor} accent='orange'>
          {data?.title && (
            <motion.div variants={titleVariant}>
              {addNbspParse(data?.title)}
            </motion.div>
          )}
        </Title>
      )}
      {data?.image && (
        <motion.div className={mediaClasses} initial='hidden' whileInView='visible' variants={imageVariant} viewport={{ amount: .5, once: true }}>
          <Image alt='' src={`${data?.image}`} width={1920} height={1024} quality={100} />
        </motion.div>
      )}
      <motion.div
        className={style.body}
        variants={groupVariants}
        whileInView='visible'
        initial='hidden'
        viewport={{ amount: .5, once: true }}
      >
        <div className={style.content}>
          {titlePosition === 'content' && (
            <Title variant='h2' color={textColor} accent='orange' className={cn(style.title, titleClass)}>
              <motion.div variants={textVariants}>
                {data?.title && addNbspParse(data?.title)}
              </motion.div>
            </Title>
          )}
          {data?.content?.map(({ title, desc }, index) => {
            const text = desc?.split('</p><p>')
            return (
              <div className={style.desc} key={title + '__' + index}>
                {title && <Title variant='h3' color={textColor}>
                  <motion.div variants={textVariants}>{title}</motion.div>
                </Title>}
                {desc && text?.map((i) => <Text key={i} color={textColor} tag='div' className={textClass}>
                  <motion.div variants={textVariants}>
                    {i.replace('<p>', '').replace('</p>', '')}
                  </motion.div>
                </Text>)}
              </div>
            )
          })}
        </div>
        <motion.div variants={textVariants}>
          {showButton && <Button color='orange' onClick={toggleModal} className={buttonClass}>Работать с нами</Button>}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
