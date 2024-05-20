import { Custom404 } from "@/components/screens/404";
import { NextPage } from "next";
import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';
import { CONTACTS_URL } from '@/helpers/apiRequests';

const Custom404Page: NextPage = () => {
  const { fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))
  useEffect(() => {
    fetchData(CONTACTS_URL, 'not')
  }, []);
  return <Custom404/>;
}
 
export default Custom404Page;
