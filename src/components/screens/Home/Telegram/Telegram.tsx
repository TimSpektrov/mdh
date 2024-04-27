import { FC } from "react";
import { TelegramProps } from "."
import { Button } from "@/components/ui";

import style from "./Telegram.module.scss"
import { addNbspParse } from '@/helpers';

export const Telegram: FC<TelegramProps> = ({title, description, textButton = 'Подписаться'}) => {
  return (
    <section className={style.wrap}>
      <div className={style.inner}>
        <div className={style.body}>
          <div className={style.content}>
            <div className={style.title}>{addNbspParse(title)}</div>
            <div className={style.desc}>{addNbspParse(description)}</div>
          </div>
          <Button secondary color="white" href="https://t.me/red_design" target="_blank">{textButton}</Button>
        </div>
        <div className={style.media}>
          <div className={style.phone}></div>
          <div className={style.msg_1}></div>
          <div className={style.msg_2}></div>
          <div className={style.circle}></div>
        </div>
      </div>
    </section>
  )
}
