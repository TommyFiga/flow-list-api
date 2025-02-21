import { TaskDTOSchema } from '@config/zod';
import { TaskDTO } from '@models/task.interface';

export function validateBodyAsTask(body: unknown) {
    const result = TaskDTOSchema.safeParse(body);

    // Pass the error
    if (!result.success) {

    }

    return result.data as TaskDTO;
}