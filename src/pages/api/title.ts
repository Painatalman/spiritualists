import type { NextApiRequest, NextApiResponse } from 'next';
import createTitleGenerator from '~/factories/createTitleGenerator';

const generator = createTitleGenerator();

export default async (req: NextApiRequest, res: NextApiResponse<string>) => {
  const titles = await generator.generateRandom(+req.query.quantity || 1);

  res.status(200).json(JSON.stringify(titles));
};
