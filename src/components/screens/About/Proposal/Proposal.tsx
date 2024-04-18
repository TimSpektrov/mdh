import { FC } from 'react';
import { ProposalProps } from '.';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { Title, Text } from '@/components/ui/Typography'
import { useModalStore } from '@/store/useModalStore';

import patternImg from './assets/pattern.svg';
import contentImg from './assets/about-content.jpg';
import style from './Proposal.module.scss';

export const Proposal: FC<ProposalProps> = () => {
  const toggleModal = useModalStore(state => state.toggleModal)

  return (
    <section className={style.wrapper}>
      <div className={style.pattern}>
        <Image src={patternImg} width={patternImg.width} alt={''} />
      </div>
      <div className={style.media}>
        <Image src={contentImg} width={contentImg.width} alt={''} />
      </div>
      <div className={style.content}>
        <Title accent='orange'>
          <div>
            <span>Мы хотим,</span> чтобы цифровые продукты действительно работали и стали частью вашей жизни
          </div>
        </Title>
        <div className={style.desc}>
          <Text  tag='div'>
            <div>Для нас дизайн продукта — больше, чем картинки, — это целостный проект, в котором продумывается всё: уникальный стиль, эстетическое впечатление, функциональность и удобство использования.</div>
          </Text>
          <Button color='orange' className={style.btn} onClick={toggleModal}>Работать с нами</Button>
        </div>
      </div>
    </section>
  );
};
