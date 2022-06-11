import { z } from 'zod';

const newResumeSchema = z.object({
  name: z
    .string()
    .min(2, 'Please enter a name containing more than 2 characters')
    .max(25, 'Please enter a name containing less than 25 characters'),
  description: z
    .string()
    .min(2, 'Please enter a description containing more than 2 characters')
    .max(100, 'Please enter a description containing less than 100 characters'),
});

export default newResumeSchema;
