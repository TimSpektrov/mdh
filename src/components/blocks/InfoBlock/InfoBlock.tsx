import { FC } from "react";
import { InfoBlockProps } from ".";
import cn from 'classnames';
import parse from "html-react-parser";
import { motion } from 'framer-motion';
import { useRouter } from "next/router";

import style from './InfoBlock.module.scss';

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

export const InfoBlock: FC<InfoBlockProps> = ({ variant, title, content, list, data }) => {

  const router = useRouter()

  const classes = cn(
    style.wrap,
    variant ? style[variant] : style.light,
    (!content && !list && !data) && style.wide,
    data && style.brighter
  )

  const titleClasses = cn(
    style.title,
    (!content && !list && !data) && style.titleLarge
  )
  
  return (
    <section className={classes}>
      {title &&
        <motion.div
          initial={{ opacity: 0, y: (!content && !list && !data) ? 60 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 'some', once: true, margin: '50px' }}
          transition={{ duration: 0.9, ease: 'backInOut' }}
          className={titleClasses}
          key={router.query + title}
        >{parse(title)}</motion.div>
      }
      {(content || list || data) &&
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
          {list &&
            <div className={style.list}>
              {list.map((item, index) => (
                <div className={style.listItem} key={index}>
                  {item.title &&
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUpVariant}
                      viewport={{ amount: 'some', once: true, margin: '50px' }}
                      className={style.listItemTitle}
                      key={router.query + item.title}
                    >{parse(item.title)}</motion.div>
                  }
                  {item.desc &&
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUpVariant}
                      viewport={{ amount: 'some', once: true, margin: '50px' }}
                      className={style.listItemDesc}
                      key={router.query + item.desc}
                    >{parse(item.desc)}</motion.div>
                  }
                </div>
              ))}
            </div>
          }
          {data &&
            <motion.ul
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariant}
              viewport={{ amount: 'some', once: true, margin: '50px' }}
              className={style.data}
              key={router.query + "__" + data}
            >
              {data.map((item,index) => (
                <li className={style.dataItem} key={index}>
                  <span className={style.dataItemTitle}>{item.title}</span>
                  <span className={style.dataItemDesc}>{item.desc}</span>
                </li>
              ))}
            </motion.ul>
          }
        </div>
      }
    </section>
  );
}
