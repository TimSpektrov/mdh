import { NextApiRequest, NextApiResponse } from 'next'
import { vacancies } from '../data/vacancies'
import { IResponseError, IVacancy } from '@/types/type'

export default function vacancyHandler(
  req: NextApiRequest,
  res: NextApiResponse<IVacancy | IResponseError>
) {
  const { query } = req
  const { slug } = query
  const vacancy = vacancies.find((p) => p.slug === slug)

  return vacancy
    ? res.status(200).json(vacancy)
    : res.status(404).json({ message: `Vacancies with slug: ${slug} not found.` })
}
