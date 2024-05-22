import { FC } from "react";
import cn from 'classnames';
import { motion } from 'framer-motion';
import { useRouter } from "next/router";
import style from './InfoBlock.module.scss';
import { addNbspParse } from '@/helpers';
import { IInfoCase } from '@/components/screens/Case';

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

export const InfoBlock: FC<IInfoCase> = ({ variant, title, content, list, data }) => {

  const router = useRouter()

  const classes = cn(
    style.wrap,
    variant ? style[variant] : style.light,
    (!content?.length && !list?.length && !data?.length) && style.wide,
    data && style.brighter
  )

  const titleClasses = cn(
    style.title,
    (!content?.length && !list?.length && !data?.length) && style.titleLarge
  )

  return (
    <section className={classes}>
      {title &&
        <motion.div
          initial={{ opacity: 0, y: (!content?.length && !list?.length && !data?.length) ? 60 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 'some', once: true, margin: '50px' }}
          transition={{ duration: 0.9, ease: 'backInOut' }}
          className={titleClasses}
          key={router.query + title}
        >{addNbspParse(title)}</motion.div>
      }
      {((content && content?.length > 0) || (list && list.length > 0) || (data && data.length > 0)) &&
        <div className={style.body}>
          {content && content.length > 0 &&
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
          {list && list.length > 0 &&
            <div className={style.list}>
              {list?.length > 0 && list.map((item, index) => (
                <div className={style.listItem} key={index}>
                  {item.title &&
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUpVariant}
                      viewport={{ amount: 'some', once: true, margin: '50px' }}
                      className={style.listItemTitle}
                      key={router.query + item.title}
                    >{addNbspParse(item.title)}</motion.div>
                  }
                  {item.description &&
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUpVariant}
                      viewport={{ amount: 'some', once: true, margin: '50px' }}
                      className={style.listItemDesc}
                      key={router.query + item.description}
                    >{addNbspParse(item.description)}</motion.div>
                  }
                </div>
              ))}
            </div>
          }
          {data && data.length > 0 &&
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
                  {item.title && <span className={style.dataItemTitle}>{addNbspParse(item.title)}</span>}
                  {item.description && <span className={style.dataItemDesc}>{addNbspParse(item.description)}</span>}
                </li>
              ))}
            </motion.ul>
          }
        </div>
      }
    </section>
  );
}
