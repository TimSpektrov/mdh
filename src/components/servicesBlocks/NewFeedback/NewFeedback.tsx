import { FC, useEffect, useState } from 'react';
import styles from './new-feedback.module.scss'
import cn from 'classnames';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { usePopupStore } from '@/store/usePopapStore';
import { useRouter } from 'next/router';
import inputStyle from '@/components/ui/Form/Field/Field.module.scss';
import { addNbspParse } from '@/helpers';

interface INewFeedback {
  title: string;
  color: string;
}
export const NewFeedback: FC<INewFeedback> = ({title, color}) => {
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
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string().min(11, 'Введите не менее 11 символов').matches(phoneRegExp, 'Номер телефона недействителен').required('Обязательно для заполнения'),
    }),
    onSubmit: values => {
      isSending()
      axios.post(`/api/formFeedback`, {
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
    }
  });

  return (
    <section className={styles.section}>
      <div className={cn('container', styles.container)}>
        <div className={styles.content}>
          <h2 className={styles.title}>{addNbspParse(title)}</h2>
          <p className={styles.description}>{addNbspParse('Оставьте контакты и наш менеджер свяжется с вами для консультации')}</p>
          <form
            className={cn(styles.form)}
            onSubmit={formik.handleSubmit}
          >
            <div className={styles['input-container']}>
              <input
                className={cn(styles['form-item'], styles.input)}
                type="number"
                min={1}
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                placeholder="Введите номер телефона"
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber &&
                <div className={inputStyle.error}>{formik.errors.phoneNumber && formik.touched.phoneNumber ? formik.errors.phoneNumber : ''}</div>
              }
            </div>
            <button className={cn(styles.submit, styles['form-item'])} type='submit'>Отправить</button>
          </form>
        </div>
      </div>
    </section>
  )
}