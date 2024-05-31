import { FC, useEffect } from 'react';
import cn from 'classnames'
import style from './TariffItem.module.scss'
import { IRate } from '@/types/type';
import Watch from '/public/assets/images/svg/watch.svg'
import Check from '/public/assets/images/svg/check.svg'
import Book from '/public/assets/images/svg/book.svg'
import Lock from '/public/assets/images/svg/lock.svg'
import { NewTypography } from '@/components/ui/NewTypography';
import { Button } from '@/components/newDesign/Button';

import { useModalStore } from '@/store/useModalStore';
import { useSelectStore } from '@/store/useSelectStore';
import { addSpacesToNumber } from '@/helpers';
import Image from 'next/image';

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
}) => {
  
  // const [currentPrice, setCurrentPrice] = useState<string>('')
  // const [oldPrice, setOldPrice] = useState<string>('')

  // useEffect(() => {
    // const cp = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    // const op = oldprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    // setCurrentPrice(cp)
    // setOldPrice(op)
  // }, [oldprice, price])

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
        <div className={style.label}>Popular</div>
      )}
      <div className={style.inner}>
        <div className={style.top}>
          <div className={style.heading}>
            <NewTypography text={name} variant={'h2'} tag={'h3'} />
            <NewTypography text={desc} variant={'p2'} tag={'p'} />
            <NewTypography text={`${addSpacesToNumber(price)} ₽`} variant={'h1'} tag={'p'} />
          </div>
          {/*<div className={style.price}>*/}
            {/*<span className={style.priceCurrent}>{currentPrice} ₽</span>*/}
            {/*{(Number(oldPrice) > 0) && <span className={style.priceOld}>{oldPrice} ₽</span>}*/}
          {/*</div>*/}
        </div>
        <div className={style.bottom}>
          <div className={style.content}>
            <NewTypography text={'Сроки и объем'} variant={'h4-alt'} tag={'h4'} />
            <ul>
              <li>
                <div className={style['icon-container']}>
                  <Image src={Watch} alt={''} width={20} height={20}/>
                </div>
                <NewTypography text={term} variant={'p'} tag={'span'} />
              </li>
              <li>
                <div className={style['icon-container']}>
                  <Image src={Book} alt={''} width={20} height={20}/>
                </div>
                <NewTypography text={volume} variant={'p'} tag={'span'} />
              </li>
            </ul>
          </div>
          <div className={style.content}>
            <NewTypography text={'Что войдет в брендбук'} variant={'h4-alt'} tag={'h4'} />
            <ul>
              {structure && structure.map(({id, name, locked}) => (
                <li key={id} className={locked ? style.locked : ''}>
                  <div className={cn(style['icon-container'],locked && style['icon-lock'])}>
                    <Image src={ locked ? Lock : Check} alt={''} width={20} height={20}/>
                  </div>
                  <NewTypography text={name} variant={'p'} tag={'span'} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Button text={'Заказать'} variant={ popular ? 'yellow' : 'transparent-black'} />
    </div>
  );
}

export default TariffItem;
