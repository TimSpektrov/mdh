import { FC } from 'react';
import { ProposalProps } from '.';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { Text, Title } from '@/components/ui/Typography';
import { useModalStore } from '@/store/useModalStore';

import style from './Proposal.module.scss';

export const Proposal: FC<ProposalProps> = ({ title, desc, data }) => {

  const toggleModal = useModalStore(state => state.toggleModal)

  return (
    <section className={style.wrapper}>
      <div className={style.inner}>
        <div className={style.heading}>
          <Title accent='mint' className={style.title}>{title}</Title>
          <div className={style.desc}>
            <Text tag='span'>{desc}</Text>
            <Button color='orange' onClick={toggleModal}>Работать с нами</Button>
          </div>
        </div>
        <div className={style.list}>
          {data.map(({id, name, desc, image}) => (
            <div key={id} className={style.item}>
              <div className={style.media}>
                <Image src={image} alt={name} width={190} height={140}/>
              </div>
              <div className={style.content}>
                <Title variant='h3' className={style.name}>{name}</Title>
                <Text className={style.desc}>{desc}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
