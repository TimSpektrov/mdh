// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { socials } from '../data/social'

export default function handler( req: NextApiRequest, res: NextApiResponse ) {
  if (req.method === 'GET') {
    res.status(200).json(socials)
  }
}
