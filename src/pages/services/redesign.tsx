import { NextPage } from 'next';
import { Redesign } from '@/components/screens/Redesign';
import data from '@json/data.json'
import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';
import { AUDIT_URL, REDESIGN_URL } from '@/helpers/apiRequests';

const RedesignPage: NextPage = () => {
  const {content, fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))
  useEffect(() => {
    fetchData(REDESIGN_URL)
  }, []);

  if(!content) return  null

  return <Redesign content={content} />;
}

export default RedesignPage;