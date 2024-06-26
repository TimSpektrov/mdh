import { NextPage } from 'next';
import { Redesign } from '@/components/screens/Redesign';
import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';
import { REDESIGN_URL } from '@/helpers/apiRequests';

const RedesignPage: NextPage = () => {
  const {content, fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))
  useEffect(() => {
    fetchData(REDESIGN_URL, 'redesign')
  }, []);

  if(!content?.redesign) return  null

  return <Redesign content={content.redesign} />;
}

export default RedesignPage;