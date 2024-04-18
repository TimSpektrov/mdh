import { FC } from 'react'
import { ImageBlockProps } from '.';

import style from './ImageBlock.module.scss'
import Image from 'next/image';
 
export const ImageBlock: FC<ImageBlockProps> = ({ images, variant, full }) => {  
  return (
    <div className={style.wrap}>
      <Image src={`${images[0].image}`} alt={`${images[0].alt}`} width={1920} height={1080} quality={100}/>
    </div>
  );
}
 
export default ImageBlock;
