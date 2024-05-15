import { NextPage, GetStaticProps } from "next";
import { Vacancies, VacanciesProps } from "@/components/screens/Vacancies";

import data from '@json/data.json'
import { VACANCIES_URL } from '@/helpers/apiRequests';
import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';

const VacanciesPage: NextPage<VacanciesProps> = () => {
  const {content, fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))

  useEffect(() => {
    fetchData(VACANCIES_URL, 'vacancy')
  }, []);

  if(!content?.vacancy) return  null
  return <Vacancies content={content.vacancy} />;
}

export default VacanciesPage;

export const getStaticProps: GetStaticProps = async () => {
  
  return {
    props: {
      vacancies: data?.vacancies?.filter(vacancy => vacancy.published === true)
    },
    revalidate: 30
  }
}
