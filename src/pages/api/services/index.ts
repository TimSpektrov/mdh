import { IService } from '@/types/type'
import { NextApiResponse, NextApiRequest } from 'next'
import { services } from '../data/services'

const Services = (
  _req: NextApiRequest,
  res: NextApiResponse<IService[]>
) => {
  return res.status(200).json(services)
 }

 export default Services
