import type { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse<string>): void => {
  res.status(200).json('pong');
};
