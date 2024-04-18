import { NextApiResponse, NextApiRequest } from 'next'
import { works } from '../data/works'
import { IWork } from '@/types/IWork'

const Works = (
  _req: NextApiRequest,
  res: NextApiResponse<IWork[]>
) => {
  return res.status(200).json(works)
 }

 export default Works
