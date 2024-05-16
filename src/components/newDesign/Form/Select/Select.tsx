import { FC, useState, useEffect } from 'react';
import { SelectProps } from '.';
import cn from 'classnames';
import { Icon } from '@/components/ui/Icon';

import { useRouter } from 'next/router';
import { SelectOption, useSelectStore } from '@/store/useSelectStore';
import style from './Select.module.scss';
import inputStyle from '@/components/ui/Form/Field/Field.module.scss';

export const Select: FC<SelectProps> = ({ textError }) => {

  const { asPath } = useRouter()
  const isServicesPage = (asPath.indexOf("services") != -1) ? true : false

  const { items, selectItem, unselectItem } = useSelectStore()
  const [selectedItems, setSelectedItems] = useState<SelectOption[]>([]);
  const [optionItems, setOptionItems] = useState<SelectOption[]>([]);

  useEffect(() => {
    switch (asPath) {
      case "/services/identity":
        setSelectedItems(items.filter(item => item.selected !== false && item.service === "identity"))
        setOptionItems(items.filter(item => item.service === "identity"))
        break;
      case "/services/ux-audit":
        setSelectedItems(items.filter(item => item.selected !== false && item.service === "ux-audit"))
        setOptionItems(items.filter(item => item.service === "ux-audit"))
        break;
      default:
        setSelectedItems(items.filter(item => item.selected !== false && item.service === undefined))
        setOptionItems(items.filter(item => item.service === undefined))
        unselectItem
        break;
    }
  }, [items, asPath, unselectItem])

  const [open, setOpen] = useState(false)
  const toggleHandle = () => setOpen(prev => !prev)

  const classes = cn(style.wrapper, open && style.open)
  const listClass = cn(style.list, open && style.show)

  return (
    <div className={classes}>
      <div className={style.overlay} onClick={toggleHandle}></div>
      {selectedItems.length > 0 ?
        <div className={style.tags}>
          {selectedItems.map((item) => (
            <span key={item.id} className={style.tag}>
              {item.title}
              <Icon name='close' size={16} className={style.icon} onClick={() => selectItem(item.id)} />
            </span>
          ))}
        </div>
        :
        <div className={style.placeholder}>{isServicesPage ? "Выберите услугу" : "Выберите проект"}</div>
      }
      <Icon name={open ? 'arrow-up' : 'arrow-down'} className={style.toggle} />
      <div className={listClass}>
        {optionItems.map(({ id, selected, title }) => (
          <div key={id} className={style.item} onClick={() => selectItem(id)}>
            <Icon className={style.checkbox} name={selected ? 'checkbox-checked' : 'checkbox-unchecked'} />
            <span>{title}</span>
          </div>
        ))}
      </div>
      {textError &&
        <div className={inputStyle.error}>{textError}</div>
      }
    </div>
  );
};
