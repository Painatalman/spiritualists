import type { NextApiRequest, NextApiResponse } from "next";
import createNameGenerator from "~/factories/createNameGenerator";

const generator = createNameGenerator();

export default async (_req: NextApiRequest, res: NextApiResponse<string>) => {
  const name = await generator.generateRandom();

  res.status(200).json(name);
};
