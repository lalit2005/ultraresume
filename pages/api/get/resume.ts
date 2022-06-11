import requireSession from '@/lib/require-session';
import { prisma } from '@/utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from 'types/types';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  user: User
) => {
  const resume = await prisma.resume.findUnique({
    where: {
      id: req.query.id as string,
    },
  });

  res.json(resume);
};

export default requireSession(handler);
