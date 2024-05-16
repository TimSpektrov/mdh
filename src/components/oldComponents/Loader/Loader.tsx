import { FC } from 'react';
import { LoaderProps, LoaderSmallProps } from '.';
import cn from 'classnames';
import { motion, AnimatePresence } from "framer-motion";
import style from './Loader.module.scss';
import styleSmall from './LoaderSmall.module.scss';

export const Loader: FC<LoaderProps> = ({ loader }) => {
  return (
    <AnimatePresence>
      {loader &&
        <motion.div
          className={style.wrap}
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: .9, ease: "circOut" }}
          exit={{ opacity: 0 }}
        >
          <div className={style.loader}/>
        </motion.div>
      }
    </AnimatePresence>
  );
};

export const LoaderSmall: FC<LoaderSmallProps> = ({color}) => {
  return (
    <div className={cn(styleSmall.loader, color && styleSmall[color])}></div>
  )
}
