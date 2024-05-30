import { NextPage } from 'next';
import { Case, IBeforeAfterCase, IGalleryCase, IImageCase, IInfoCase, ISliderCase } from '@/components/screens/Case';
import { AnimatePresence, motion } from 'framer-motion';
import { HorisontalScrollNavigation } from '@/components/ui/HorisontalScrollNavigation';
import { Feedback } from '@/components/oldComponents/Feedback';
import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';
import { WORK_ITEM_URL } from '@/helpers/apiRequests';
import { useRouter } from 'next/router';

const WorkPage: NextPage = () => {
  const {query} = useRouter()
  const slug = query.slug

  const {content, fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))
  useEffect(() => {
    if(typeof slug === 'string') {
      fetchData(WORK_ITEM_URL + '/' + slug, slug )
    }
  }, [fetchData, slug]);


  if(typeof slug !== 'string' || !content || !content[slug]) return  null

  const textBlocks = content[slug].text_blocks.map((item: IInfoCase) => {
    return item?.feedback?.name ?
     {
      blockType: 'TextBlock',
      block: item,
      blockShow: true,
      id: item.number
    } : {
      blockType: 'InfoBlock',
      block: item,
      blockShow: true,
      id: item.number
    }
  })
  const imageBlocks = content[slug].images_block.map((item: IImageCase) => {
    return {
      blockType: 'ImageBlock',
      block: item,
      blockShow: true,
      id: item.number,
    }
  })
  const beforeBlocks = content[slug].before_blocks.map((item: IBeforeAfterCase) => {
    return {
      blockType: 'BeforeAfterBlock',
      block: item,
      blockShow: true,
      id: item.number,
    }
  })
  const galleryBlocks = content[slug].gallery_blocks.map((item: IGalleryCase) => {
    // console.log('SliderBlock', item);
    return {
      blockType: 'GalleryBlock',
      block: item,
      blockShow: true,
      id: item.number,
    }
  })
  const sliderBlocks = content[slug].slider_blocks.map((item: ISliderCase) => {
    return {
      blockType: 'SliderBlock',
      block: item,
      blockShow: true,
      id: item.number,
    }
  })
  const pageContent = [...textBlocks, ...imageBlocks, ...beforeBlocks, ...sliderBlocks, ...galleryBlocks].sort((a, b) => a.id - b.id)

  return (
    <>
      <HorisontalScrollNavigation key={'scrollNavTop'} id={1} position="top" navigation={content[slug].all_cases}  />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          // key={props.slug}
        >
          <Case hero={content[slug].hero} blocks={pageContent}/>
        </motion.div>
      </AnimatePresence>
      <HorisontalScrollNavigation key={'scrollNavBottom'} id={2} position="bottom" navigation={content[slug].all_cases} />
      <Feedback />
    </>
  );
};

export default WorkPage;
