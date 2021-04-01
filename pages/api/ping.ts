import { StatusCodes } from 'http-status-codes';
import type { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse<string>): void => {
  res.status(StatusCodes.OK).json('pong');
};
