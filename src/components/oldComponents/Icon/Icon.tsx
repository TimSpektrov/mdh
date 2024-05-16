import { FC } from 'react';
import { IconProps } from '.';

export const Icon: FC<IconProps> = ({ className, style, size = 24, name, onClick }) => {
  return (
    <svg className={className} width={size} height={size} style={style} onClick={onClick}>
      <use xlinkHref={`/assets/images/svg/icons.svg#${name}`}></use>
    </svg>
  );
};
