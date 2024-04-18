import axios from 'axios';

export const BASE_URL =  'https://mdhadmin.secreate.dev'
export const CONTACTS_URL = '/api/contacts/'
export const SERVICES_URL = '/api/services/'
export const TAGS_URL = '/api/tags/'
export const WORKS_URL = '/api/works/'

export const AUDIT_URL = '/api/audit'
export const REDESIGN_URL = '/api/redesign'
export const NOCODE_URL = '/api/nocode'
export const VACANCIES_URL = '/api/audit'

export const api = axios.create({
  baseURL: BASE_URL
})