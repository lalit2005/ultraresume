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
    socialLinks,
    experience1Title,
    experience1Description,
    experience2Title,
    experience2Description,
    experience3Title,
    experience3Description,
    education1Title,
    education1Description,
  } = req.body;

  const resume = await prisma.resume.update({
    where: {
      id,
    },
    data: {
      name,
      about,
      template,
      socialLinks,
      email,
      footer_text,
      location,
      profile_pic,
      skillSet,
      experience1Title,
      experience1Description,
      experience2Title,
      experience2Description,
      experience3Title,
      experience3Description,
      education1Title,
      education1Description,
    },
  });

  res.json(resume);
};

export default requireSession(handler);
