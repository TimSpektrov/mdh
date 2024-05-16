import { NextPage } from "next";
import { About } from "@/components/screens/About";
import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';
import { ABOUT_US_URL } from '@/helpers/apiRequests';

const AboutPage: NextPage<any> = () => {
  const {content, fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))
  useEffect(() => {
    fetchData(ABOUT_US_URL, 'aboutus')
  }, []);

  if(!content?.aboutus) return  null

  return <About content={content.aboutus}/>;
}

export default AboutPage;
