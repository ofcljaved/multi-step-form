import { z } from 'zod';

export const PlanSchema = z.object({
  name: z.string().min(1, 'Name is Required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required').max(11),
  plan: z.string().min(1, 'This is required'),
  yearlyPlan: z.boolean(),
  onlineService: z.boolean().optional(),
  largerStorage: z.boolean().optional(),
  customizableProfile: z.boolean().optional(),
});

export type PlanSchemaType = z.infer<typeof PlanSchema>;
export type FieldName = keyof PlanSchemaType;
