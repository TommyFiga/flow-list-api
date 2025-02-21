import { z } from 'zod';

const priorityEnum = z.enum(['low', 'medium', 'high']);

const isoDateSchema = z.string().refine(d => d === new Date(d).toISOString());

// TODO: Create a function to validate the zod errors

export const TaskDTOSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    startDate: isoDateSchema.optional(),
    dueDate: isoDateSchema.optional(),
    priority: priorityEnum.optional()
});

