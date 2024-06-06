import React, { forwardRef, useRef } from 'react';
import cn from 'classnames'
import Link from 'next/link';
import Image from 'next/image';
import { Tags } from '@/components/newDesign/Tags';
import { motion } from 'framer-motion';
import style from './Work.module.scss';
import { IWork } from '@/types/IWork';
import { addNbspParse } from '@/helpers';
import { NewTypography } from '@/components/ui/NewTypography';

const variant = {
  default: {
    scale: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeInOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeInOut"
    }
  },
}

export const Work = forwardRef<HTMLAnchorElement | any, IWork>(({ title, desc, image, tags, className, slug, light, published }, ref) => {
  const caseRef = useRef(null)
  const classes = cn(style.wrap, light && style.caseLight, className, 'case')
  const onMouseEnter = () => {
    if (published) {
      document?.querySelector('.cursor')?.classList.add('show')
      document?.querySelector('.cursor')?.classList.remove('hide')
    } else {
      document?.querySelector('.cursor')?.classList.add('show', 'disabled')
      document?.querySelector('.cursor')?.classList.remove('hide')
    }
  }

  const onMouseLeave = () => {
    document?.querySelector('.cursor')?.classList.add('hide')
    document?.querySelector('.cursor')?.classList.remove('show', 'disabled', 'active')
  }

  const onMouseDown = () => {
    if (published) {
      document?.querySelector('.cursor')?.classList.add('active')
    }
  }

  const onMouseUp = () => {
    document?.querySelector('.cursor')?.classList.remove('active')
  }

  const onClick = (event: any) => {
    event.preventDefault()
  }

  return (
    <Link
      href={published ? `/works/${slug}` : ""}
      className={classes}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onClick={published ? () => { } : onClick}
    >
      <motion.div
        className={style.inner}
        initial="default"
        whileHover="hover"
        animate="default"
        ref={caseRef}
      >
        <div className={style.img}>
          <motion.div className={style.imgInner} variants={variant} >
            <Image
              src={image}
              alt=''
              quality={100}
              width={1224}
              height={900}
            />
          </motion.div>
          {!published && (<div className={style.label}>Скоро</div>)}
        </div>
        <div className={style.content}>
          <div className={style.heading}>
            {/*{title && (<NewTypography text={title} variant={'h4-alt'} tag={'h3'}/>)}*/}
            <h3 className={cn(style.title, light ? 'light' : 'dark')} >
              {title && <span>{addNbspParse(title)}</span>}
            </h3>
            {tags && <Tags tags={tags} className={style.tags} />}
          </div>
          {desc && <p className={cn(style.desc, light ? 'light' : 'dark')}>{addNbspParse(desc)}</p>}
        </div>
      </motion.div>
    </Link>
  );
})

Work.displayName = 'Work';

export const MotionWork = motion(Work)
