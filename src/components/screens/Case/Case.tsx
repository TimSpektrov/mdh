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

  const heroTextCSKA = `
  <style>
.cska {
position: relative;
width: 100%;
height: 100%;
}
.cska__wrapper {
position: relative;
width: 100%;
height: 100%;
}
.cska__inner {
position: relative;
width: 100%;
height: 100%;
overflow: hidden;
}
@media screen and (max-width: 576px) {
  .cska__wrapper{
    border: 4px solid #000;
    border-radius: 16px;
  }
  .cska__inner {
    border-radius: 12px
  }
}
@media screen and (min-width: 576px) and (max-width: 768px) {
  .cska__wrapper{
    border: 6px solid #000;
    border-radius: 16px;
  }
  .cska__inner {
    border-radius: 10px
  }
}
@media screen and (min-width: 768px) and (max-width: 960px) {
  .cska__wrapper{
    border: 6px solid #000;
    border-radius: 20px;
  }
  .cska__inner {
    border-radius: 14px
  }
}
@media screen and (min-width: 960px) and (max-width: 1200px) {
  .cska__wrapper{
    border: 8px solid #000;
    border-radius: 20px;
  }
  .cska__inner {
    border-radius: 12px
  }
}
@media screen and (min-width: 1200px) and (max-width: 1440px) {
  .cska__wrapper{
    border: 8px solid #000;
    border-radius: 24px;
  }
  .cska__inner {
    border-radius: 16px
  }
}
@media screen and (min-width: 1440px) and (max-width: 1540px) {
  .cska__wrapper{
    border: 16px solid #000;
    border-radius: 40px;
  }
  .cska__inner {
    border-radius: 24px
  }
}
@media screen and (min-width: 1540px) {
  .cska__wrapper{
    border: 20px solid #000;
    border-radius: 48px;
  }
  .cska__inner {
    border-radius: 28px
  }
}
@media screen and (max-width: 768px) {
  .cska {
    padding: 0 16px;
  }
}
@media screen and (min-width: 768px) {
  .cska {
    padding: 0 36px;
  }
}
.cska__bg {
width: 100%;
height: 100%;
object-fit: cover;
}
.cska__flip-container {
  perspective: 1500px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 42%;
  z-index: 2;

  @media screen and (min-width: 576px){
    width: 40%;
  }

  @media screen and (min-width: 1200px){
    width: 39%;
  }
}

.cska__flipper {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  animation: rotation 6s infinite linear;
}

.cska__flip-front,
.cska__flip-back {
  position: absolute;
  inset: 0;
  display: block;
  object-fit: cover;
  object-position: center;
  backface-visibility: hidden;
}

.cska__flip-front {
  z-index: 4;
}

.cska__flip-back {
  transform: rotateY(180deg);
  z-index: 3;
}
@keyframes rotation {
  100% {
    transform: rotateY(360deg);
  }
}

</style>
<div class='cska'>
  <div class='cska__wrapper'>
    <div class='cska__inner'>
      <img class="cska__bg" src='/assets/images/work/cska/hero/cska-hero.webp' alt=''>
      <div class='cska__flip-container'>
      <div class='cska__flipper'>
        <img class="cska__flip-front" src='/assets/images/work/cska/hero/cska-flip-front.webp' alt=''>
        <img class="cska__flip-back" src='/assets/images/work/cska/hero/cska-flip-back.webp' alt=''>
      </div>
    </div>
  </div>
</div>
  `
  const heroText = `
<style>
.fit-services {
position: relative;
width: 100%;
height: 100%;
}
.fit-services__wrapper {
position: relative;
width: 100%;
height: 100%;
}
.fit-services__inner {
position: relative;
width: 100%;
height: 100%;
overflow: hidden;
}

.fit-services-img {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
animation: fitServicesOpacityImage 6s infinite ;
opacity: 0;
}

.fit-services-img-1 {
 animation: none;
 opacity: 1;
}
.fit-services-img-2 {
 animation-delay: -2s;
}
.fit-services-img-3 {
 animation-delay: 0s;
}
.fit-services-auto {
position: absolute;
bottom: 7.5%;
width: 50%;
left: 120%;
object-position: center;
object-fit: contain;
animation: fitServicesMoveAuto 8s infinite ease-in-out;
}
@media screen and (max-width: 576px) {
  .fit-services__wrapper{
    border: 4px solid #000;
    border-radius: 16px;
  }
  .fit-services__inner {
    border-radius: 12px
  }
}
@media screen and (min-width: 576px) and (max-width: 768px) {
  .fit-services__wrapper{
    border: 6px solid #000;
    border-radius: 16px;
  }
  .fit-services__inner {
    border-radius: 10px
  }
}
@media screen and (min-width: 768px) and (max-width: 960px) {
  .fit-services__wrapper{
    border: 6px solid #000;
    border-radius: 20px;
  }
  .fit-services__inner {
    border-radius: 14px
  }
}
@media screen and (min-width: 960px) and (max-width: 1200px) {
  .fit-services__wrapper{
    border: 8px solid #000;
    border-radius: 20px;
  }
  .fit-services__inner {
    border-radius: 12px
  }
}
@media screen and (min-width: 1200px) and (max-width: 1440px) {
  .fit-services__wrapper{
    border: 8px solid #000;
    border-radius: 24px;
  }
  .fit-services__inner {
    border-radius: 16px
  }
}
@media screen and (min-width: 1440px) and (max-width: 1540px) {
  .fit-services__wrapper{
    border: 16px solid #000;
    border-radius: 40px;
  }
  .fit-services__inner {
    border-radius: 24px
  }
}
@media screen and (min-width: 1540px) {
  .fit-services__wrapper{
    border: 20px solid #000;
    border-radius: 48px;
  }
  .fit-services__inner {
    border-radius: 28px
  }
}
@media screen and (max-width: 768px) {
  .fit-services {
    padding: 0 16px;
  }
}
@media screen and (min-width: 768px) {
  .fit-services {
    padding: 0 36px;
  }
}
@keyframes fitServicesOpacityImage {
  0% {
    opacity: 0;
  }
  33% {
    opacity: 1;
  }
  66% {
    opacity: 0;
  }
 100% {
    opacity: 0;
 }
}

@keyframes fitServicesMoveAuto {
  0% {
  left: -100%
  }
  40% {
  left: 5%;
  }
  60% {
  left: 5%;
  }
  100% {
  left: 120%;
  }

}
</style>
<div class='fit-services'>
  <div class='fit-services__wrapper'>
    <div class='fit-services__inner'>
      <img class="fit-services-img fit-services-img-1" src='/assets/images/work/fit-service/hero/fit-service-home-1.jpg' alt=''>
      <img class="fit-services-img fit-services-img-2" src='/assets/images/work/fit-service/hero/fit-service-home-2.jpg' alt=''>
      <img class="fit-services-img fit-services-img-3" src='/assets/images/work/fit-service/hero/fit-service-home-3.jpg' alt=''>
      <img class="fit-services-auto" src='/assets/images/work/fit-service/hero/fit-service-auto.svg' alt=''>
    </div>
  </div>
</div>
  `
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
     {/*  data.works[0].pageHero?.blockShow === true && (*/}
     {/*    <HeroFitServiceBlock*/}
     {/*      autoImage={data.works[0].pageHero?.autoImage}*/}
     {/*      images={data.works[0].pageHero?.images}*/}
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
        {/*<>{parse(heroTextCSKA)}</>*/}
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
