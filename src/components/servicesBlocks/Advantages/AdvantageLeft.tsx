import { FC } from 'react';
import { NewTypography } from '@/components/ui/NewTypography';
import styles from './advantages.module.scss';
import Image from 'next/image';
export interface IAdvantagesLeft {
  type: string;
  text: string;
  alt: string;
}
export const AdvantageLeft: FC<IAdvantagesLeft> = ({ type, text, alt }) => {
  switch (type) {
    case 'text':
      return <NewTypography text={text} variant={'h2'} tag={'h2'} />;
    case 'image':
      return  <Image
        className={styles.img}
        src={text}
        alt={alt}
        width={1920}
        height={1080}
      />;
    case 'video':
      return (
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
          poster={text}
        >
          <source src={alt} />
        </video>
      );
    default:
      return <p>{text}</p>;
  }
};

