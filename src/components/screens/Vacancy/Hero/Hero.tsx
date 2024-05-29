import { FC } from 'react';
import { HeroProps } from '.';
import { Button } from '@/components/ui';
import Image from 'next/image';
import { Text, Title } from '@/components/ui/Typography';

import style from './Hero.module.scss';
import { addNbspParse } from '@/helpers';

export const Hero: FC<HeroProps> = ({ title, desc, image }) => {
  const scrollToFeedback = () => {
    const feedback = document
      ?.getElementById('feedback')
      ?.getBoundingClientRect().y;
    window.scrollTo(0, Number(feedback) + window.scrollY);
  };

  return (
    <section className={style.wrapper}>
      <div className={style.media}>
        <Image src={`${image}`} alt={title} width={889} height={1577} />
      </div>
      <div className={style.body}>
        <div className={style.content}>
          <Title variant="h2">{addNbspParse(title)}</Title>
          <Text>{desc && addNbspParse(desc)}</Text>
        </div>
        <Button color="orange" href="#feedback" onClick={scrollToFeedback}>
          Откликнуться на вакансию
        </Button>
      </div>
    </section>
  );
};
