import { FC, useEffect, useState, useRef } from 'react';
import { FeedbackProps } from '.';
import { useRouter } from 'next/router';
import cn from 'classnames'
import { Emails } from '@/components/newDesign/Emails';
import { Social } from '@/components/newDesign/Social';
import { Field, TextArea, FieldFile } from '@/components/newDesign/Form'
import { Title, Text } from '@/components/ui/Typography'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import parse from 'html-react-parser';
import { isMobile } from 'react-device-detect';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePopupStore } from "@/store/usePopapStore";
import data from '@json/data.json';
import btnStyle from '@/components/ui/Button/Button.module.scss'
import style from './Feedback.module.scss';
import { NewTypography } from '@/components/ui/NewTypography';
import { addNbspParse } from '@/helpers';

// Основной компонент
export const Feedback: FC<FeedbackProps> = ({ title, desc }) => {

  const [feedbackHeight, setFeedbackHeight] = useState<any>(undefined)
  const [screenWidth, setScreenWidth] = useState<any>(undefined)
  const [screenHeight, setScreenHeight] = useState<any>(undefined)

  const [fixed, setFixed] = useState(false)

  const { asPath } = useRouter()
  const isVacansiesPage = (asPath.indexOf("vacancies") !== -1)

  useEffect(() => {
    const viewportIsSmall: any = () => {
      setFeedbackHeight(document.getElementById('feedback')?.offsetHeight)
      setScreenWidth(window?.innerWidth)
      setScreenHeight(window?.innerHeight - 100)
      setFixed(isMobile || feedbackHeight > screenHeight || screenWidth <= 1366 || isVacansiesPage)
    }
    viewportIsSmall()
    window.addEventListener('resize', viewportIsSmall)
    return () => {
      window.removeEventListener('resize', viewportIsSmall)
    }
  }, [screenWidth, screenHeight, feedbackHeight, isVacansiesPage])

  return (
    <>
      {fixed ? <DefaultFeedback title={title} desc={desc} id={'feedback'} /> : <MotionFeedback title={title} desc={desc} id={'feedback'} />}
    </>
  )
}

export const FeedbackContent: FC<FeedbackProps> = ({ title, desc }) => {
  const socials = data.socials.filter(({ showFeedback }) => showFeedback === true)
  const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5,6}$/;
  const [pagePath, setPagePath] = useState('')
  const [pageTitle, setPageTitle] = useState('')
  const { isSending, isSuccess, isWarning, closePopup } = usePopupStore()

  const { asPath } = useRouter()
  useEffect(() => {
    setPagePath(asPath)
    setPageTitle(document?.title)
  }, [asPath])

  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      text: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, 'Введите не менее 2-x символов').max(20, 'Не более 20 символов').required('Обязательно для заполнения'),
      phoneNumber: Yup.string().min(11, 'Введите не менее 11 символов').matches(phoneRegExp, 'Номер телефона недействителен').required('Обязательно для заполнения'),
      text: Yup.string().min(20, 'Введите не менее 20 символов').max(500, 'Не более 500 символов')
    }),
    onSubmit: values => {
      isSending()
      axios.post(`/api/formFeedback`, {
        name: values.name,
        phoneNumber: values.phoneNumber,
        text: values.text,
        pageTitle: pageTitle,
        pagePath: pagePath
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          if (response.status === 200) {
            formik.resetForm()
            isSuccess()
            setTimeout(() => {
              closePopup()
            }, 4000);
          }
        })
        .catch(function (error) {
          isWarning();
          setTimeout(() => {
            closePopup();
          }, 4000);
          console.log(error);
        });
    }
  });

  return (
    <>
      <div className={style.top}>
        {title && desc ?
          <div className={style.heading}>
            <Title variant='h1'>{parse(title)}</Title>
            <Text className={style.desc}>{parse(desc)}</Text>
          </div>
          :
          <div className={style.heading}>
            <NewTypography text={'Расскажите нам о&nbsp;своем проекте'} variant={'h1'} tag={'h2'} />
            <Social color='dark' links={socials} className={style.social} />
          </div>
        }
        <form className={cn('form', style.form)} onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="form__body">
            <div className="form__group">
              <Field
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                textError={formik.errors.name && formik.touched.name ? formik.errors.name : ''}
                placeholder="Имя"
              />
            </div>
            <div className="form__group">
              <Field
                type="number"
                min={1}
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                textError={formik.errors.phoneNumber && formik.touched.phoneNumber ? formik.errors.phoneNumber : ''}
                placeholder="Телефон"
              />
            </div>
            <div className="form__group">
              <TextArea
                name="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.text}
                textError={formik.errors.text && formik.touched.text ? formik.errors.text : ''}
                placeholder="Сообщение"
                textLength={formik.values.text.length}
              />
            </div>
          </div>
          <div className={style.form__footer}>
            <div className="form__group">
              <div className={cn( style['form__file-container'])}>
                <FieldFile />
              </div>
            </div>
            <div className="form__group">
              <div className={`form__btn ${style.form__btn}`}>
                <button className={cn(btnStyle.btn, btnStyle['btn--secondary'], btnStyle['btn--white'], style.btn)} type='submit'>Отправить</button>
                <div className={style.accept}>{addNbspParse('Нажимая на кнопку, вы соглашаетесь с <a href="#">политикой конфиденциальности</a>')}</div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={style.bottom}>
        <Title variant='h3' className={style.subtitle}>Контакты</Title>
        <div className={style.contacts}>
          <Social links={socials} color='dark' className={style.social} />
          <Emails className={style.emails} />
        </div>
      </div>
    </>
  )
}

export const DefaultFeedback: FC<FeedbackProps> = ({ title, desc }) => {
  return (
    <section className={style.wrapper} id='feedback'>
      <FeedbackContent title={title} desc={desc} />
    </section>
  )
}

export const MotionFeedback: FC<FeedbackProps> = ({ title, desc }) => {

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ layoutEffect: false, target: ref, offset: ["start end", "end end"] });
  const spring = { mass: 0.3, stiffness: 190, damping: 28, restDelta: .001, restSpeed: 20 }
  const scrollY = useSpring(scrollYProgress, spring);
  const yPosition = useTransform(scrollY, [1, 0], ['0%', '-100%']);

  return (
    <div className={style.container} ref={ref} id='feedback'>
      <motion.section className={style.wrapper} style={{ y: yPosition }}>
        <FeedbackContent title={title} desc={desc} />
      </motion.section>
    </div>
  );
};
