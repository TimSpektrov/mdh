import { FC } from 'react';
import { PopupProps, SendingProps, SuccessProps, WarningProps } from '.';
import cn from 'classnames';
import { Icon } from '../Icon';
import { motion, AnimatePresence } from "framer-motion";
import { usePopupStore } from "@/store/usePopapStore";

import style from './Popup.module.scss';

const data = {
  sending: {
    title: 'Отправляем...'
  },
  success: {
    title: 'Заявка отправлена',
    message: 'Менеджер свяжется с вами в течение двух рабочих дней'
  },
  warning: {
    title: 'Что-то пошло не так',
    message: 'Перезагрузите страницy и попробуйте отправить заявку еще раз'
  }
}

export const Popup: FC<PopupProps> = ({className}) => {

  const { showPopup, closePopup } = usePopupStore()

  return (
    <AnimatePresence mode='sync'>
      {showPopup &&
        <motion.div
          className={cn(style.wrap, className)}
          initial={{opacity: 0}}
          animate={{ opacity: 1, transition: { duration: .7 }} }
          exit={{ opacity: 0, transition: { duration: .7 } }}
        >
          <div className={style.overlay} onClick={closePopup} />
          <AnimatePresence mode='sync'>
            <SuccessPopup/>
            <WarningPopup/>
            <SendingPopup/>
          </AnimatePresence>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export const SendingPopup: FC<SendingProps> = () => {
  const { sendingPopup } = usePopupStore()
  return (
    <AnimatePresence mode='popLayout'>
      {sendingPopup && 
        <motion.div
          className={style.popup}
          initial={{scale: .8, opacity: 0}}
          animate={{scale: 1, opacity: 1 }}
          transition={{ duration: .7, type: "spring"}}
          exit={{scale: .8, opacity: 0 }}
        >
          <div className={style.heading}>
            <svg viewBox="0 0 24 24" className={style.loader}>
              <circle className={style.loaderPath} cx="12" cy="12" r="10" fill="none" stroke="#D9F2F2" strokeWidth="2.8" strokeLinecap="round"></circle>
              <circle className={style.loaderPath2} cx="12" cy="12" r="10" fill="none" stroke="#43BCBC" strokeWidth="2.8" strokeLinecap="round"></circle>
            </svg>
            <div className={style.title}>{data.sending.title}</div>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export const SuccessPopup: FC<SuccessProps> = () => {
  const { successPopup, closePopup } = usePopupStore()
  return (
    <AnimatePresence mode='popLayout'>
      {successPopup && 
        <motion.div
          className={style.popup}
          initial={{scale: .8, opacity: 0}}
          animate={{scale: 1, opacity: 1 }}
          transition={{ duration: .7, type: "spring" }}
          exit={{scale: .8, opacity: 0 }}
        >
          <div className={style.close} onClick={closePopup}>
            <Icon name='close' size={16}/>
          </div>
          <div className={cn(style.heading, style.mint)}>
            <Icon name='success'/>
            <div className={style.title}>{data.success.title}</div>
          </div>
          <div className={style.content}>
            <p>{data.success.message}</p>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export const WarningPopup: FC<WarningProps> = () => {
  const { warningPopup, closePopup } = usePopupStore()
  return (
    <AnimatePresence mode='popLayout'>
      {warningPopup &&
        <motion.div
          className={style.popup}
          initial={{scale: .8, opacity: 0}}
          animate={{scale: 1, opacity: 1 }}
          transition={{ duration: .7, type: "spring" }}
          exit={{scale: .8, opacity: 0 }}
        >
          <div className={style.close} onClick={closePopup}>
            <Icon name='close' size={16}/>
          </div>
          <div className={cn(style.heading, style.orange)}>
            <Icon name='warning'/>
            <div className={cn(style.title)}>{data.warning.title}</div>
          </div>
          <div className={style.content}>
            <p>{data.warning.message}</p>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
}
