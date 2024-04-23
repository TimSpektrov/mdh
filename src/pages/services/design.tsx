import { NextPage } from "next";
import { Design } from "@/components/screens/Design";
import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';
import { DESIGN_FULL_CYCLE_URL } from '@/helpers/apiRequests';


const DesignPage: NextPage = () => {
  const {content, fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))
  useEffect(() => {
    fetchData(DESIGN_FULL_CYCLE_URL, 'designFull')
  }, []);

  if(!content?.designFull) return  null

  return <Design content={content.designFull}/>;
}
 
export default DesignPage;