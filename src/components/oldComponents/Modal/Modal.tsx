import { FC, useState, useEffect } from "react";
import { ModalProps } from ".";
import { useRouter } from "next/router";
import cn from 'classnames'
import { Emails } from "@/components/oldComponents/Emails";
import { Logo } from "@/components/oldComponents/Logo";
import { Select, Field, FieldFile } from "@/components/ui/Form";

import { useScrollbarWidth } from "@/hooks/useScrollbarWidth";
import { useModalStore } from "@/store/useModalStore";
import { useMenuStore } from "@/store/useMenuStore";
import { useSelectStore } from "@/store/useSelectStore";

import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePopupStore } from "@/store/usePopapStore";

import btnStyle from '@/components/ui/Button/Button.module.scss'
import style from "./Modal.module.scss";
import { Icon } from "../Icon";
import { addNbspParse } from '@/helpers';

export const Modal: FC<ModalProps> = ({className}) => {

  const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5,6}$/;
  const { showModal, toggleModal } = useModalStore()
  const { showMenu } = useMenuStore()
  const { items, unselectItem } = useSelectStore()

  const { isSending, isSuccess, isWarning, closePopup } = usePopupStore()

  const [pagePath, setPagePath] = useState('')
  const [pageTitle, setPageTitle] = useState('')
  const { asPath } = useRouter()

  const scrollbarWidth = useScrollbarWidth()

  const selectedItems = items.filter(item => item.selected !== false)
  const projects = selectedItems.map((item) => {
    return item.title
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      projects: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, 'Введите не менее 2-x символов').max(20, 'Не более 20 символов').required('Обязательно для заполнения'),
      phoneNumber: Yup.string().min(11, 'Введите не менее 11 символов').matches(phoneRegExp, 'Номер телефона недействителен').required('Обязательно для заполнения'),
      projects: Yup.string().required('Выберите проект')
    }),
    onSubmit: values => {
      isSending()
      axios.post(`/api/formModal`, {
        name: values.name,
        phoneNumber: values.phoneNumber,
        projects: values.projects,
        pageTitle: pageTitle,
        pagePath: pagePath
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          if (response.status === 200) {
            unselectItem()
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
        });
    }
  });

  useEffect(() => {
    setPagePath(asPath)
    setPageTitle(document?.title)
  }, [asPath])

  useEffect(() => {
    if (showModal) {
      document.body.setAttribute('style', `overflow: hidden !important; padding-right: ${scrollbarWidth}px`)
      document.querySelector('header')?.setAttribute('style', `padding-right: ${scrollbarWidth}px`)
    } else {
      if (!showMenu) {
        setTimeout(() => {
          document.body.removeAttribute('style')
          document.querySelector('header')?.removeAttribute('style')
        }, 500)
      }
    }
  }, [showModal, showMenu, scrollbarWidth])

  useEffect(() => {
    formik.setFieldValue('projects', projects.join(','))
  }, [items])

  const handleClick = () => { toggleModal() }

  return (
    <div className={cn(style.modal, showModal && style.show, className)} onClick={ e => (e.currentTarget === e.target) && handleClick() }>
      <div className={style.content}>
        <Icon name="close" className={style.close} onClick={handleClick} size={24}/>
        {/* <div className={style.close} onClick={handleClick}></div> */}
        <div className={style.header}>
          <Logo light className={style.logo} />
        </div>
        <form className={cn(style.modalForm, style.success, 'form')} onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="form__header">
            <div className={cn(style.form__title, 'form__title')}>Расскажите нам о своем проекте</div>
          </div>
          <div className="form__body">
            <div className="form__group">
              <Select textError={formik.errors.projects && formik.touched.projects ? formik.errors.projects : ''} />
              <input
                type="hidden"
                name="projects"
                value={formik.values.projects}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form__group">
              <div className="form__input">
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
            </div>
            <div className="form__group">
              <div className="form__input">
                <Field
                  type="number"
                  min={1}
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  placeholder="Телефон"
                  textError={formik.errors.phoneNumber && formik.touched.phoneNumber ? formik.errors.phoneNumber : ''}
                />
              </div>
            </div>
          </div>
          <div className="form__footer">
            {/* <div className="form__group">
              <FieldFile />
            </div> */}
            <div className="form__group">
              <div className="form__btn">
                <button className={cn(btnStyle.btn, btnStyle['btn--secondary'], btnStyle['btn--large'], btnStyle['btn--white'], style.btn)} type='submit'>Отправить</button>
                <div className={cn('accept', style.form__accept)}>{addNbspParse('Нажимая на кнопку, вы соглашаетесь с <a href="#">политикой конфиденциальности</a>')}</div>
              </div>
            </div>
          </div>
        </form>
        <Emails className={style.emails} />
      </div>
    </div>
  );
};
