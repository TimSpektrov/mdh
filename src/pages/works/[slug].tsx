import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Case } from '@/components/screens/Case';
import { IWork } from '@/types/IWork';

import data from '@json/data.json';
import { AnimatePresence, motion } from 'framer-motion';
import { HorisontalScrollNavigation } from '@/components/ui/HorisontalScrollNavigation';
import { Feedback } from '@/components/ui/Feedback';

interface IParams extends ParsedUrlQuery {
  slug?: string;
}

const WorkPage: NextPage<IWork> = (props: IWork) => {
  return (
    <>
      <HorisontalScrollNavigation key={'scrollNavTop'} position="top" />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          key={props.slug}
        >
          <Case data={props} />
        </motion.div>
      </AnimatePresence>
      <HorisontalScrollNavigation key={'scrollNavBottom'} position="bottom" />
      <Feedback />
    </>
  );
};

export default WorkPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: data.works.map((work) => ({ params: { slug: work.slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const props = data.works.find((work) => slug === work.slug);

  if (!props?.published) {
    return {
      notFound: true
    };
  }

  return {
    props,
    revalidate: 60
  };
};
