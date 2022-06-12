import requireSession from '@/lib/require-session';
import { prisma } from '@/utils/prisma';
import { nanoid } from 'nanoid';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from 'types/types';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  user: User
) => {
  const resume = await prisma.resume.create({
    data: {
      name: req.body.name,
      description: 'Software Engineer',
      profile_pic: user.image,
      createdBy: user.id,
      skillSet: 'nextjs, tailwindcss, prisma, vercel, remix, github actions',
      about:
        'A technical leader with eight years of experience designing, planning, and implementing internal and external APIs at scale.',
      template: 'default',
      email: user.email,
      location: 'Bangalore, India',
      publicId: nanoid(5),
      Experience: {
        create: {
          title: 'Software Engineer @ iNeuron',
          description:
            'Worked on a team of three, responsible for refactoring the API to be RESTful.Optimized SQL queries leading to a 15% reduction in p95 response times.',
          period: '2017 - current',
        },
      },
      Education: {
        create: {
          title: 'MSc in Computer Science',
          description: 'University of Mumbai',
          period: '2016-2020',
        },
      },
    },
  });

  res.json(resume);
};

export default requireSession(handler);
