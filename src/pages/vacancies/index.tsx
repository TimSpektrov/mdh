import { NextPage, GetStaticProps } from "next";
import { Vacancies, VacanciesProps } from "@/components/screens/Vacancies";

import data from '@json/data.json'
import { VACANCIES_URL } from '@/helpers/apiRequests';
import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';

const VacanciesPage: NextPage<VacanciesProps> = ({ vacancies }) => {
  const {content, fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))
  useEffect(() => {
    fetchData(VACANCIES_URL)
  }, []);

  console.log(content);
  return <Vacancies vacancies={vacancies}/>;
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
