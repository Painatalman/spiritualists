import type { NextApiRequest, NextApiResponse } from 'next';
import createTitleGenerator from '~/factories/createTitleGenerator';
import APIError from '~/types/APIError';

const generator = createTitleGenerator();

export default async (
  req: NextApiRequest,
  res: NextApiResponse<string[] | APIError>
) => {
  try {
    const titles = await generator.generateRandom(+req.query.quantity || 1);
    res.status(200).json(titles);
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
};
