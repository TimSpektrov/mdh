import { FC } from 'react';
import { TasksProps } from './Tasks.props';
import Image from 'next/image';
import { Title, Text } from "@/components/ui/Typography";
import patternImg from './assets/pattern.svg'
import style from './Tasks.module.scss';
import { NewTypography } from '@/components/ui/NewTypography';

export const Tasks: FC<TasksProps> = ({ list, title }) => {

  return (
    <section className={style.wrapper}>
      <div className={style.pattern}>
        <Image src={patternImg} alt={''} width={patternImg.width} />
      </div>
      {title && (<div className={style.title}>
        <NewTypography text={title} variant={'h2'}  />
      </div>)}
      <div className={style.list}>
        {list.map(({ id, desc, image, title }, i) => (
          <div className={style.item} key={id}>
            <div className={style.icon}>
              <Image src={image ? image : `/assets/images/tasks/tasks-icon-${i + 1}.svg`} alt={''} fill />
            </div>
            <div className={style.content}>
              <Title variant='h3' color='light'>{title}</Title>
              <Text className={style.desc} color='gray'>{desc}</Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
