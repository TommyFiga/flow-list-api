import prisma from '@config/prisma';
import { Task, TaskDTO } from '@models/task.interface';

async function createTask(taskData: TaskDTO) {
    const task = await prisma.task.create({
        data: {
            title: taskData.title,
            description: taskData.description,
            startDate: taskData.startDate,
            dueDate: taskData.dueDate,
            priority: taskData.priority,
            creationDate: new Date().toISOString()
        }
    });

    return task as Task;
}


async function getTasks() {
    const tasks = await prisma.task.findMany({});
    return tasks as Task[];
}


async function getTaskById(id: string) {
    const task = await prisma.task.findUnique({
        where: {
            id
        }
    });

    return task as Task;
}


async function updateTaskData(id: string, taskData: TaskDTO) {
    const updatedTask = await prisma.task.update({
        where: {
            id
        },
        data: {
            title: taskData.title,
            description: taskData.description,
            startDate: taskData.startDate,
            dueDate: taskData.dueDate,
            priority: taskData.priority,
        }
    });

    return updatedTask as Task;
}


async function updateTaskStatus(id: string) {
    const updatedTask = await prisma.task.update({
        where: {
            id
        },
        data:{
            status: 'Completed'
        }
    });

    return updatedTask as Task;
}


async function deleteTask(id: string) {
    const deletedTask= await prisma.task.delete({
        where: {
            id
        }
    });

    return deletedTask as Task;
}


export const taskRepositories = {
    createTask,
    getTasks,
    getTaskById,
    updateTaskData,
    updateTaskStatus,
    deleteTask
}