import { FC } from 'react';
import { CaseProps } from '.';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { HeroCskaBlock, HeroFitServiceBlock } from './HeroBlock';
import { InfoBlock } from '@/components/blocks/InfoBlock';
import { TextBlock } from '@/components/blocks/TextBlock';
import ImageBlock from '@/components/blocks/ImageBlock/ImageBlock';
import { SliderBlock } from '@/components/blocks/SliderBlock';
import GalleryBlock from '@/components/blocks/GalleryBlock/GalleryBlock';
import BeforeAfterSlider from 'react-before-after-slider-component';

import 'react-before-after-slider-component/dist/build.css';
import { HorisontalScrollNavigation } from '@/components/ui/HorisontalScrollNavigation';
import style from './Case.module.scss';

export const Case: FC<CaseProps> = ({ data }) => {
  const { query } = useRouter();
  const blocks = data.pageContent?.filter((item) => item.blockShow === true);

  return (
    <>
      <Head>
        <title>{data.seoTitle ?? data.title}</title>
        <meta name="description" content={data.seoDesc ?? data.desc} />
      </Head>

      {query.slug &&
        query.slug === 'cska' &&
        data.pageHero?.blockShow === true && (
          <HeroCskaBlock
            background={data.pageHero?.background}
            imageFront={data.pageHero?.imageFront}
            imageBack={data.pageHero?.imageBack}
            variant={data.pageHero?.variant}
          />
        )}

      {query.slug &&
        query.slug === 'fit-service' &&
        data.pageHero?.blockShow === true && (
          <HeroFitServiceBlock
            autoImage={data.pageHero?.autoImage}
            images={data.pageHero?.images}
          />
        )}

      {blocks?.map((item, index) => {
        switch (item.blockType) {
          case 'InfoBlock':
            return (
              <InfoBlock
                variant={item.block.variant}
                title={item.block.title}
                content={item.block.content}
                list={item.block.list}
                data={item.block.data}
                key={item.blockType + '__' + index}
              />
            );
          case 'TextBlock':
            return (
              <TextBlock
                title={item.block.title}
                variant={item.block.variant}
                content={item.block.content}
                feedback={item.block.feedback}
                key={item.blockType + '__' + index}
              />
            );
          case 'BeforeAfterBlock':
            return (
              <BeforeAfterSlider
                className={style.beforeAfterSlider}
                firstImage={{ imageUrl: item.block.firstImage }}
                secondImage={{ imageUrl: item.block.secondImage }}
                delimiterIconStyles={{ cursor: 'ew-resize' }}
                key={item.blockType + '__' + index}
              />
            );
          case 'ImageBlock':
            return (
              <ImageBlock
                variant={item.block.variant}
                reverse={item.block.reverse}
                full={item.block.full}
                images={item.block.images}
                key={item.blockType + index + item.block.images}
              />
            );
          case 'SliderBlock':
            return (
              <SliderBlock
                variant={item.block.variant}
                images={item.block.images}
                key={item.blockType + '__' + index}
              />
            );
          case 'GalleryBlock':
            return (
              <GalleryBlock
                direction={item.block.direction}
                variant={item.block.variant}
                images={item.block.images}
                key={item.blockType + '__' + index}
              />
            );
          default:
            return (
              <h1
                key={index}
                style={{
                  backgroundColor: 'Background',
                  lineHeight: 1,
                  margin: 0,
                  padding: 180,
                  textAlign: 'center'
                }}
              >
                Подходящий компонент не найден
              </h1>
            );
        }
      })}
    </>
  );
};
