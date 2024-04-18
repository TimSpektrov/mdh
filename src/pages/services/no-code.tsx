import { NextPage } from 'next';
import { NoCode } from "@/components/screens/NoCode";
import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';
import { NOCODE_URL, REDESIGN_URL } from '@/helpers/apiRequests';

const NoCodePage: NextPage = () => {
  const {content, fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))
  useEffect(() => {
    fetchData(NOCODE_URL)
  }, []);

  if(!content) return  null
  return <NoCode content={content}/>;
}

export default NoCodePage;
