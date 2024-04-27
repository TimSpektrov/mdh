import { NextPage } from 'next';
import { Works, WorksProps } from '@/components/screens/Works';

import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';
import { WORKS_URL } from '@/helpers/apiRequests';

const WorksPage: NextPage<WorksProps> = () => {
  const {content, fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))

  useEffect(() => {
    fetchData(WORKS_URL, 'works')
  }, []);

  console.log(content?.works);
  if(!content?.works) return  null
  return <Works works={content.works} />;
};

export default WorksPage;
