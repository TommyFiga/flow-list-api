import { Task, TaskDTO } from '@models/task.interface';
import { taskRepositories } from '@api/repositories/tasks-repositories';

async function createTask(taskData: TaskDTO) {
    const task = await taskRepositories.createTask(taskData);
    return task;
}


async function getTasks() {
    const tasks = await taskRepositories.getTasks();
    return tasks;
}


async function getTaskById(id: string) {
    const task = await taskRepositories.getTaskById(id);
    return task;
}


async function updateTaskData(id: string, taskData: TaskDTO) {
    const updatedTask = await taskRepositories.updateTaskData(id, taskData);
    return updatedTask;
}


async function updateTaskStatus(id: string) {
    const updatedTask = await taskRepositories.updateTaskStatus(id);
    return updatedTask;
}


async function deletedTask(id: string) {
    const deletedTask = await taskRepositories.deleteTask(id);
    return deletedTask;
}


export const taskServices = {
    createTask,
    getTasks,
    getTaskById,
    updateTaskData,
    updateTaskStatus,
    deletedTask
}