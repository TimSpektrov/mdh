import { IVacancy } from '@/types/type'
import { NextApiResponse, NextApiRequest } from 'next'
import { vacancies } from '../data/vacancies'

const Vacancies = (
  _req: NextApiRequest,
  res: NextApiResponse<IVacancy[]>
) => {
  return res.status(200).json(vacancies)
 }

 export default Vacancies
