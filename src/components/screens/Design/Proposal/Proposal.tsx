import { FC } from 'react';
import { ProposalProps } from '.';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { Text, Title } from '@/components/ui/Typography';
import { useModalStore } from '@/store/useModalStore';

import style from './Proposal.module.scss';
import { addNbspParse } from '@/helpers';

export const Proposal: FC<ProposalProps> = ({ title, description, data }) => {
  const toggleModal = useModalStore(state => state.toggleModal)

  return (
    <section className={style.wrapper}>
      <div className={style.inner}>
        <div className={style.heading}>
          <Title accent='mint' className={style.title}>{addNbspParse(title)}</Title>
          <div className={style.desc}>
            <Text tag='span'>{description}</Text>
            <Button color='orange' onClick={toggleModal}>Работать с нами</Button>
          </div>
        </div>
        <div className={style.list}>
          {data.map(({ title, description, image}) => (
            <div key={title} className={style.item}>
              <div className={style.media}>
                <Image src={image} alt={title} width={190} height={140}/>
              </div>
              <div className={style.content}>
                <Title variant='h3' className={style.name}>{title}</Title>
                <Text className={style.desc}>{description}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
