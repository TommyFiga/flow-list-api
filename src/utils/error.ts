type TaskHttpErrorMessage =
    'Task not found' |
    'Invalid title' |
    'Invalid description' |
    'Invalid date format' |
    'Start date cannot be after the due date' |
    'Invalid priority';


const TaskHttpErrorMapper: Record<TaskHttpErrorMessage, number> = {
    'Task not found': 404,
    'Invalid title': 400,
    'Invalid description': 400,
    'Invalid date format': 400,
    'Start date cannot be after the due date': 400,
    'Invalid priority': 400
}


export function createTaskHttpError(errorMessage: TaskHttpErrorMessage) {
    return {
        code: TaskHttpErrorMapper[errorMessage],
        description: errorMessage
    }
}