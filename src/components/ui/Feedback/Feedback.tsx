import { FC, useEffect, useState, useRef } from 'react';
import { FeedbackProps } from './index';
import { useRouter } from 'next/router';
import cn from 'classnames'
import { Social, Emails } from '@/components/ui';
import { Field, TextArea, FieldFile } from '@/components/ui/Form'
import { Title, Text } from '@/components/ui/Typography'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePopupStore } from "@/store/usePopapStore";
import btnStyle from '@/components/ui/Button/Button.module.scss'
import style from './Feedback.module.scss';
import { useContactsDateStore } from '@/store/useContextDataStore';
import { addNbspParse } from '@/helpers';


// Основной компонент
export const Feedback: FC<FeedbackProps> = ({ title, desc }) => {

  const [feedbackHeight, setFeedbackHeight] = useState<any>(undefined)
  const [screenWidth, setScreenWidth] = useState<any>(undefined)
  const [screenHeight, setScreenHeight] = useState<any>(undefined)

  const [fixed, setFixed] = useState(false)

  const { asPath } = useRouter()
  const isVacansiesPage = (asPath.indexOf("vacancies") != -1)

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
  const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5,6}$/;
  const [pagePath, setPagePath] = useState('')
  const [pageTitle, setPageTitle] = useState('')
  const { isSending, isSuccess, isWarning, closePopup } = usePopupStore()
  const { asPath } = useRouter()
  useEffect(() => {
    setPagePath(asPath)
    setPageTitle(document?.title)
  }, [asPath])

  const { contacts} = useContactsDateStore(state => ({
    contacts: state.contacts,
  }))

  const socials = [
    {
      name: "WhatsApp",
      url: contacts?.social_media?.whatsapp
    },
    {
      name: "Telegram",
      url: contacts?.social_media?.telegram
    },
    {
      name: "Behance",
      url: contacts?.social_media?.behance
    },
  ].filter(item => item.url)
  const emails = [
    {
      "id": 1,
      "label": "Для новых проектов",
      "email": contacts?.email_for_project
    },
    {
      "id": 2,
      "label": "Для сотрудничества и рекламы",
      "email": contacts?.email_for_cooperation
    },
    {
      "id": 3,
      "label": "Для резюме",
      "email": contacts?.email_for_resume
    }
  ].filter(item => item.email)

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
            <Title variant='h1'>{addNbspParse(title)}</Title>
            <Text className={style.desc}>{addNbspParse(desc)}</Text>
          </div>
          :
          <div className={style.heading}>
            <Title variant='h1'>Расскажите нам о&nbsp;своем проекте</Title>
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
          <div className={`form__footer ${style.form__footer}`}>
             <div className="form__group">
              <FieldFile />
            </div>
            <div className="form__group">
              <div className={`form__btn ${style.form__btn}`}>
                <button className={cn(btnStyle.btn, btnStyle['btn--secondary'], btnStyle['btn--large'], btnStyle['btn--white'], style.btn)} type='submit'>Отправить</button>
                <div className="accept">Нажимая на кнопку, вы соглашаетесь с <a href='#'>политикой конфиденциальности</a></div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={style.bottom}>
        <Title variant='h3' className={style.subtitle}>Контакты</Title>
        <div className={style.contacts}>
          <Social links={socials} color='dark' className={style.social} />
          <Emails emails={emails} className={style.emails} />
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
