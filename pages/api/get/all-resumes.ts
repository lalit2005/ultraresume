import requireSession from '@/lib/require-session';
import { prisma } from '@/utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from 'types/types';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  user: User
) => {
  const resume = await prisma.resume.findMany({
    where: {
      createdBy: user.id,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });

  res.json(resume);
};

export default requireSession(handler);
