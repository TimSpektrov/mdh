import { NextPage, GetStaticProps } from 'next';
import { Works, WorksProps } from '@/components/screens/Works';

import data from '@json/data.json';

const WorksPage: NextPage<WorksProps> = ({ works }) => {
  return <Works works={works} />;
};

export default WorksPage;

export const getStaticProps: GetStaticProps = async () => {
  // if (process.env.PAGE_NOT_FOUND) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return {
    props: {
      works: data?.works
    },
    revalidate: 30
  };
};
