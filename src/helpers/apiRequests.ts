import axios from 'axios';

export const BASE_URL =  'https://mdhadmin.secreate.dev'
export const CONTACTS_URL = '/api/contacts/'
export const SERVICES_URL = '/api/services/'
export const TAGS_URL = '/api/tags/'
export const WORKS_URL = '/api/works/'
export const WORK_ITEM_URL = '/api/fit'
export const AUDIT_URL = '/api/audit'
export const IDENTITY_URL = '/api/identity'
export const REDESIGN_URL = '/api/redesign'
export const NOCODE_URL = '/api/nocode'
export const DESIGN_FULL_CYCLE_URL = '/api/integrated-design'
export const DESIGN_PROMO_MATERIALS_URL = '/api/design-promo'
export const VACANCIES_URL = '/api/vacancies'
export const HOME_URL = '/api/main'
export const ABOUT_US_URL = '/api/aboutus'
export const PRODUCT_DESIGN_URL = '/api/product-design'
export const api = axios.create({
  baseURL: BASE_URL
})