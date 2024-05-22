import { FC } from "react";
import cn from 'classnames'
import { motion } from 'framer-motion';
import { useRouter } from "next/router";

import style from './TextBlock.module.scss'
import { addNbspParse } from '@/helpers';
import { ITextBlock } from '@/components/screens/Case';

const fadeInUpVariant = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .9,
      ease: 'backInOut'
    }
  }
}

export const TextBlock: FC<ITextBlock> = ({ variant, title, content, feedback }) => {

  const router = useRouter()

  const classes = cn(
    style.wrap,
    variant ? style[variant] : style.light
  )

  return (
    <div className={classes}>
      {title &&
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariant}
          viewport={{ amount: 'some', once: true, margin: '50px' }}
          className={style.title}
          key={router.query + title}
        >{addNbspParse(title)}</motion.div>
      }

      {(content || feedback.name) &&
        <div className={style.body}>
          {content &&
            <div className={style.content}>
              {content.map((item, index) => (
                <div className={style.contentItem} key={index}>
                  {item.title &&
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUpVariant}
                      viewport={{ amount: 'some', once: true, margin: '50px' }}
                      className={style.contentItemTitle}
                      key={router.query + item.title}
                    >{addNbspParse(item.title)}</motion.div>
                  }
                  {item.description &&
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUpVariant}
                      viewport={{ amount: 'some', once: true, margin: '50px' }}
                      className={style.contentItemDesc}
                      key={router.query + item.description}
                    >{addNbspParse(item.description)}</motion.div>
                  }
                </div>
              ))}
            </div>
          }

          {/*{feedback.name &&*/}
            <div className={style.feedback}>
              {/*{feedback.map((item, index) => (*/}
                <div className={style.feedbackItem} key={0}>
                  <div className={style.user}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUpVariant}
                      viewport={{ amount: 'some', once: true, margin: '50px' }}
                      className={style.userName}
                      key={router.query + feedback.name}
                    >{addNbspParse(feedback.name)}</motion.div>
                    {feedback.position &&
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUpVariant}
                        viewport={{ amount: 'some', once: true, margin: '50px' }}
                        className={style.userPosition}
                        key={router.query + feedback.position}
                      >{addNbspParse(feedback.position)}</motion.div>}
                  </div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUpVariant}
                    viewport={{ amount: 'some', once: true, margin: '50px' }}
                    className={style.text}
                    key={router.query + feedback.text}
                  >{addNbspParse(feedback.text)}</motion.div>
                </div>
              {/*)}*/}
            </div>
          {/*}*/}
        </div>
      }
    </div>
  );
}
