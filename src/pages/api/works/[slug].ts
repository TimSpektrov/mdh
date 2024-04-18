import { NextApiRequest, NextApiResponse } from 'next'
import { works } from '../data/works'
import { IResponseError } from '@/types/type'
import { IWork } from '@/types/IWork'

export default function workHandler(
  req: NextApiRequest,
  res: NextApiResponse<IWork | IResponseError>
) {
  const { query } = req
  const { slug } = query
  const work = works.find((p) => p.slug === slug)

  return work
    ? res.status(200).json(work)
    : res.status(404).json({ message: `Works with slug: ${slug} not found.` })
}
