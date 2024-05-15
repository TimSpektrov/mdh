import { FC, useState, useEffect } from 'react';
import Head from 'next/head';
import { Hero } from './Hero';
import { Conditions } from './Conditions';
import { VacancyProps } from '.';
import { NewFooterFeedback } from 'src/components/ui/NewFooterFeedback';

export const Vacancy: FC<VacancyProps> = ({ data }) => {
  const [feedbackTitle, setFeedbackTitle] = useState('')
  const [feedbackDesc, setFeedbackDesc] = useState('')

  useEffect(() => {
    setFeedbackTitle('ОТкликнуться на&nbsp;вакансию')
    setFeedbackDesc('Заполните анкету и&nbsp;приложите резюме или&nbsp;прикрепите ссылки на&nbsp;ваше портфолио, чтобы мы смогли подробно ознакомиться с&nbsp;уровнем ваших профессиональных навыков')
  }, [])

  console.log(data);
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.desc} />
      </Head>
      <Hero
        title={data.title}
        desc={data.desc}
        image={data.image}
      />
      <Conditions conditions={data.conditions} offers={data.offers} />
      <NewFooterFeedback title={feedbackTitle} desc={feedbackDesc}/>
    </>
  );
};
