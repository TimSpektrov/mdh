import { FC } from 'react';
import { CaseProps, TCaseProps } from '.';
import { InfoBlock } from '@/components/blocks/InfoBlock';
import { TextBlock } from '@/components/blocks/TextBlock';
import ImageBlock from '@/components/blocks/ImageBlock/ImageBlock';
import { SliderBlock } from '@/components/blocks/SliderBlock';
import GalleryBlock from '@/components/blocks/GalleryBlock/GalleryBlock';
import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import style from './Case.module.scss';
import parse from 'html-react-parser';

export const Case: FC<CaseProps> = ({ blocks, hero } ) => {
  // const { query } = useRouter();

  return (
    <>
      {/*<Head>*/}
      {/*  <title>{data.seoTitle ?? data.title}</title>*/}
      {/*  <meta name="description" content={data.seoDesc ?? data.desc} />*/}
      {/*</Head>*/}


      {/*{query.slug &&*/}
      {/*  query.slug === 'cska' &&*/}
      {/*  data.pageHero?.blockShow === true && (*/}
      {/*    <HeroCskaBlock*/}
      {/*      background={data.pageHero?.background}*/}
      {/*      imageFront={data.pageHero?.imageFront}*/}
      {/*      imageBack={data.pageHero?.imageBack}*/}
      {/*      variant={data.pageHero?.variant}*/}
      {/*    />*/}
      {/*  )}*/}

      {/*{query.slug &&*/}
      {/*  query.slug === 'fit-service' &&*/}
      {/*  data.pageHero?.blockShow === true && (*/}
      {/*    <HeroFitServiceBlock*/}
      {/*      autoImage={data.pageHero?.autoImage}*/}
      {/*      images={data.pageHero?.images}*/}
      {/*    />*/}
      {/*  )}*/}

      <section className={style.hero}>
        {hero.show_video ? (
          <video
            className={style['hero-video']}
            autoPlay
            loop
            muted
            playsInline
            poster={hero.poster}
          >
            <source src={hero.video_url} />
          </video>
        ) : (
          <>{parse(hero.html_code)}</>
          )
        }
      </section>

      {blocks.length > 0 &&
        blocks.map(({block, blockType, id }: TCaseProps, index: number) => {
          switch (blockType) {
            case 'InfoBlock':
              return (
                <InfoBlock
                  variant={block?.variant}
                  title={block?.title}
                  content={block?.content}
                  list={block?.list}
                  data={block?.data}
                  key={id}
                  number={id}
                />
              )
              case 'TextBlock':
                return (
                  <TextBlock
                    title={block.title}
                    variant={block.variant}
                    content={block.content}
                    feedback={block.feedback}
                    key={id}
                  />
                );
              case 'BeforeAfterBlock':
                return (
                  <BeforeAfterSlider
                    className={style.beforeAfterSlider}
                    firstImage={{imageUrl: block.firstImage } }
                    secondImage={ {imageUrl:block.secondImage} }
                    delimiterIconStyles={{ cursor: 'ew-resize' }}
                    key={id}
                  />
                );
              case 'ImageBlock':
                return (
                  <ImageBlock
                    variant={block.variant}
                    reverse={block.reverse}
                    full={block.full}
                    image_url={block.image_url}
                    image_alt={block.image_alt}
                    key={id}
                    number={block.number}
                  />
                );
            case 'GalleryBlock':
              return (
                <GalleryBlock
                  direction={block.direction}
                  variant={block.variant}
                  images={block.images}
                  key={id}
                />
              );
            case 'SliderBlock':
              return (
                <SliderBlock
                  variant={block.variant}
                  images={block.images}
                  key={id}
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
        })
      }

    </>
  );
};
