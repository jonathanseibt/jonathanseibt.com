import { StatusCodes } from 'http-status-codes';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function PingApi(_request: NextApiRequest, response: NextApiResponse<string>): void {
  response.status(StatusCodes.OK).json('pong');
}
