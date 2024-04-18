import { FC } from "react";
import { TextBlockProps } from ".";
import cn from 'classnames'
import parse from "html-react-parser";
import { motion } from 'framer-motion';
import { useRouter } from "next/router";

import style from './TextBlock.module.scss'

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

export const TextBlock: FC<TextBlockProps> = ({ variant, title, content, feedback }) => {

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
        >{parse(title)}</motion.div>
      }

      {(content || feedback) &&
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
                    >{parse(item.title)}</motion.div>
                  }
                  {item.desc &&
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUpVariant}
                      viewport={{ amount: 'some', once: true, margin: '50px' }}
                      className={style.contentItemDesc}
                      key={router.query + item.desc}
                    >{parse(item.desc)}</motion.div>
                  }
                </div>
              ))}
            </div>
          }

          {feedback &&
            <div className={style.feedback}>
              {feedback.map((item, index) => (
                <div className={style.feedbackItem} key={index}>
                  <div className={style.user}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUpVariant}
                      viewport={{ amount: 'some', once: true, margin: '50px' }}
                      className={style.userName}
                      key={router.query + item.name}
                    >{parse(item.name)}</motion.div>
                    {item.position &&
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUpVariant}
                        viewport={{ amount: 'some', once: true, margin: '50px' }}
                        className={style.userPosition}
                        key={router.query + item.position}
                      >{parse(item.position)}</motion.div>}
                  </div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUpVariant}
                    viewport={{ amount: 'some', once: true, margin: '50px' }}
                    className={style.text}
                    key={router.query + item.text}
                  >{parse(item.text)}</motion.div>
                </div>
              ))}
            </div>
          }
        </div>
      }
    </div>
  );
}
