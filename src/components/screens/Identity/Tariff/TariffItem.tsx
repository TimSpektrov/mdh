import { FC, useEffect, useState } from 'react';
import cn from 'classnames'
import { Text, Title } from '@/components/ui/Typography';
import { Button } from '@/components/ui';
import { Icon } from '@/components/ui/Icon';

import style from './TariffItem.module.scss'
import { IRate } from '@/types/type';
import { useModalStore } from '@/store/useModalStore';
import { useSelectStore } from '@/store/useSelectStore';

const TariffItem: FC<IRate> = ({
  name,
  desc,
  price,
  oldprice = 0,
  popular,
  term,
  volume,
  structure,
  uniqueId,
  id,
}) => {
  
  const [currentPrice, setCurrentPrice] = useState<string>('')
  const [oldPrice, setOldPrice] = useState<string>('')
  useEffect(() => {
    const cp = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    const op = oldprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    setCurrentPrice(cp)
    setOldPrice(op)
  }, [oldprice, price])

  const { toggleModal, showModal } = useModalStore()
  const { selectItem, unselectItem } = useSelectStore()

  useEffect(() => {
    !showModal && unselectItem()
  }, [showModal, unselectItem])

  const classes = cn(style.wrap, popular && style.popular)

  return (
    <div className={classes} onClick={() => { toggleModal(); selectItem(Number(uniqueId));
     }}>
      {popular && (
        <div className={style.label}>
          <Title color='white' variant='h3'>Popular</Title>
        </div>
      )}
      <div className={style.inner}>
        <div className={style.top}>
          <div className={style.heading}>
            <Title color='white'>{ name }</Title>
            <Text className={style.desc} color='light'>{ desc }</Text>
          </div>
          <div className={style.price}>
            <span className={style.priceCurrent}>{currentPrice} ₽</span>
            {(Number(oldPrice) > 0) && <span className={style.priceOld}>{oldPrice} ₽</span>}
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.content}>
            <Title variant='h4' color='white'>Сроки и объем</Title>
            <ul>
              <li>
                <Icon className={style.icon} name='watch' />
                <Text tag='span' color='light'>{ term }</Text>
              </li>
              <li>
                <Icon className={style.icon} name='book' />
                <Text tag='span' color='light'>{ volume }</Text>
              </li>
            </ul>
          </div>
          <div className={style.content}>
            <Title variant='h4' color='white'>Что войдет в брендбук </Title>
            <ul>
              {structure && structure.map(({id, name, locked}) => (
                <li key={id} className={locked ? style.locked : ''}>
                  <Icon className={style.icon} name={locked ? 'lock' : 'check'} />
                  <Text tag='span' color='light'>{ name }</Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Button secondary large className={style.btn}>Заказать</Button>
    </div>
  );
}

export default TariffItem;
