import { INavigate } from '@/types/type'
import { NextApiResponse, NextApiRequest } from 'next'
import { navigation } from '../data/navigation'

const Navigation = (
  _req: NextApiRequest,
  res: NextApiResponse<INavigate[]>
) => {
  return res.status(200).json(navigation)
 }

 export default Navigation
