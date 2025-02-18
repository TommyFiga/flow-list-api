export type Status = 'completed' | 'incomplete';
export type Priority = 'low' | 'medium' | 'high';

export interface Task extends TaskDTO{
    id: string;
    status: Status;
    creationDate: string;
}

export interface TaskDTO {
    title: string;
    description?: string;
    startDate?: string;
    dueDate?: string;
    priority?: Priority;
}
