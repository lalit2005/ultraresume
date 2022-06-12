import requireSession from '@/lib/require-session';
import { prisma } from '@/utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from 'types/types';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  user: User
) => {
  const {
    id,
    name,
    about,
    email,
    footer_text,
    location,
    profile_pic,
    skillSet,
    template,
  } = req.body;

  const resume = await prisma.resume.update({
    where: {
      id,
    },
    data: {
      name,
      about,
      template,
      email,
      footer_text,
      location,
      profile_pic,
      skillSet,
    },
  });

  res.json(resume);
};

export default requireSession(handler);
