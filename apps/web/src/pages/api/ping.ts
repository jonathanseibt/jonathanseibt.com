import { StatusCodes } from "http-status-codes";
import type { NextApiRequest, NextApiResponse } from "next";

const PingApi = (_request: NextApiRequest, response: NextApiResponse<string>): void => {
  response.status(StatusCodes.OK).json("pong");
};

export default PingApi;
