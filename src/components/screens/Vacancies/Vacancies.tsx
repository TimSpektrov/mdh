import { FC, useState, useEffect } from 'react';
import Head from 'next/head';
import { VacanciesProps } from '.';
import { Hero } from './Hero';
import { VacanciesList } from './VacanciesList';
import { Feedback } from '@/components/ui/Feedback';

export const Vacancies: FC<VacanciesProps> = ({  content, vacancies }) => {
  const [feedbackTitle, setFeedbackTitle] = useState('')
  const [feedbackDesc, setFeedbackDesc] = useState('')

  const vacancy = content;
  // console.log(vacancies[0], vacancy && vacancy[0]);
  useEffect(() => {
    if (vacancies && vacancies.length > 0) {
      setFeedbackTitle('НЕ&nbsp;НАШЛИ подходящую ВАКАНСИЮ')
      setFeedbackDesc('Отправьте нам резюме с&nbsp;небольшим рассказом о&nbsp;себе. Мы свяжемся с&nbsp;вами, как&nbsp;только откроется подходящая вакансия')
    } else {
      setFeedbackTitle('В&nbsp;данный момент у&nbsp;нас нет открытых вакансий')
      setFeedbackDesc('Если вы разделяете ценнности нашей команды, напишите и&nbsp;мы с&nbsp;вами свяжемся, как только откроется релевантная вашему опыту вакансия.')
    }
  }, [vacancies])

  return (
    <>
      <Head>
        <title>Вакансии - студия дизайна MDH</title>
        <meta name="description" content="Вакансии дизайнера от студии дизайна MDH. Мы создаём условия для развития, совершенствования и реализации творческого и профессионального потенциала." />
      </Head>
      <Hero />
      {vacancy?.length > 0 && <VacanciesList data={vacancy} />}
      <Feedback title={feedbackTitle} desc={feedbackDesc} />
    </>
  );
};
