import type { NextApiRequest, NextApiResponse } from 'next';
import createDescriptionGenerator from '~/factories/createDescriptionGenerator';
import createNameGenerator from '~/factories/createNameGenerator';
import DescriptionGenerator from '~/generators/DescriptionGenerator';

const generator: DescriptionGenerator = createDescriptionGenerator();
const nameGenerator = createNameGenerator();

export default async (req: NextApiRequest, res: NextApiResponse<string>) => {
  let name = req.query.name || (await nameGenerator.generateRandom());
  if (Array.isArray(name)) {
    name = name[0];
  }

  res.status(200).json(await generator.generateRandom(name));
};
