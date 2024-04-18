import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Vacancy } from '@/components/screens/Vacancy';
import { IVacancy } from '@/types/type';

import data from '@json/data.json'

interface IParams extends ParsedUrlQuery {
  slug?: string;
}

const VacancyPage: NextPage<IVacancy> = (props: IVacancy) => {
  return (
    <>
      <Vacancy data={props} />
    </>
  );
};

export default VacancyPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: data.vacancies.map((vacancy) => ({
      params: { slug: vacancy.slug }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const props = data.vacancies.find((vacancy) => slug === vacancy.slug);

  if (!props?.published) {
    return {
      notFound: true
    };
  }

  return {
    props,
    revalidate: 60
  };
};
