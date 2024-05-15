import { NextPage } from 'next';
import { Vacancy } from '@/components/screens/Vacancy';

import { useRouter } from 'next/router';
import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';
import { VACANCIES_URL } from '@/helpers/apiRequests';

const VacancyPage: NextPage = () => {
  const {query} = useRouter()
  const slug = query.slug

  console.log(query);
  const {content, fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))
  // fetchData(VACANCIES_URL + '/' + slug, slug )
  useEffect(() => {
    if(typeof slug === 'string') {
      fetchData(VACANCIES_URL + '/' + slug, slug )
    }
  }, [fetchData, slug]);

  if(typeof slug !== 'string' || !content || !content[slug]) return  null
  return (
    <>
      <Vacancy data={content[slug]} />
    </>
  );
};

export default VacancyPage;
