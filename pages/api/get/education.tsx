import requireSession from '@/lib/require-session';
import { prisma } from '@/utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from 'types/types';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  user: User
) => {
  const resume = await prisma.education.findMany({
    where: {
      resume: {
        id: req.query.resumeId as string,
      },
    },
  });

  res.json(resume);
};

export default requireSession(handler);
