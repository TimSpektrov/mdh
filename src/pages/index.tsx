import { NextPage } from 'next';
import { Home, HomeProps } from '@/components/screens/Home'
import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';
import { HOME_URL } from '@/helpers/apiRequests';

const HomePage: NextPage<HomeProps> = () => {
  const {content, fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))
  useEffect(() => {
    fetchData(HOME_URL, 'home')
  }, []);

  if(!content?.home) return  null

  return <Home content={content.home} />
}

export default HomePage;