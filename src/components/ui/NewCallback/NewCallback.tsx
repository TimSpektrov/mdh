import { FC, useState, useEffect } from 'react';
import cn from 'classnames'
import { Title, Text } from '../Typography';
import { Field } from '../Form';
import { useRouter } from 'next/router';

import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePopupStore } from "@/store/usePopapStore";

import btnStyle from '@/components/ui/Button/Button.module.scss'
import style from './NewCallback.module.scss';
import { NewTypography } from '@/components/ui/NewTypography';
import { addNbsp } from '@/helpers';
import parse from 'html-react-parser';

export interface CallbackProps {
  background?: 'dark' | 'light' | 'light-dark' | 'dark-light';
  className?: string;
  specificClass?: string;
}
export const NewCallback: FC<CallbackProps> = ({ background, className, specificClass = 'page' }) => {

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
      phoneNumber: ''
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string().min(11, 'Введите не менее 11 символов').matches(phoneRegExp, 'Номер телефона недействителен').required('Обязательно для заполнения')
    }),
    onSubmit: values => {
      isSending()
      axios.post(`/api/formCallback`, {
        phoneNumber: values.phoneNumber,
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
    },
  });

  const classes = cn(
    style.callback,
    background && style[background],
    style[specificClass]
  )

  return (
    <div className={classes}>
      <div className={cn(style.inner, className)}>
        <div className={style.heading}>
          <NewTypography text={'Остались <span>вопросы?</span>'} variant={'h2'} tag={'h2'} />
          <Text>{parse(addNbsp('Оставьте свои контакты и мы свяжемся с вами, чтобы помочь в выборе оптимального тарифа'))}</Text>
        </div>
        <form className={style.form} onSubmit={formik.handleSubmit} autoComplete="off">
          <Field
            className={style.input}
            type="number"
            min={1}
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            placeholder="Введите номер телефона"
            textError={formik.errors.phoneNumber}
          />
          <button className={cn(btnStyle.btn, btnStyle['btn--secondary'], btnStyle['btn--large'], style.btn)} type='submit'>Отправить</button>
        </form>
      </div>
    </div>
  );
};
