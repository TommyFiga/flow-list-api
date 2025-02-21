import { Request, Response } from 'express';
import { taskServices } from '@api/services/task-services';
import { validateBodyAsTask } from '@utils/validation';


async function createTask(req: Request, res: Response) {
    try {
        const bodyData = validateBodyAsTask(req.body);
        const createdTask = await taskServices.createTask(bodyData); 
        res.json(createdTask);
    } catch (error: unknown) {
        console.log(error);
    }
}


async function getTasks(req: Request, res: Response) {
    try {
        const allTasks = await taskServices.getTasks();
        res.json(allTasks);
    } catch (error: unknown) {
        console.log(error);
    }
}


async function getTaskById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const task = await taskServices.getTaskById(id);
        res.json(task);
    } catch (error: unknown) {
        console.log(error);
    }
}


async function updateTaskData(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const bodyData = validateBodyAsTask(req.body);
        const updatedTask = await taskServices.updateTaskData(id, bodyData);
        res.json(updatedTask);
    } catch (error: unknown) {
        console.log(error);
    }
}


async function updateTaskStatus(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const updatedTask = await taskServices.updateTaskStatus(id);
        res.json(updatedTask);
    } catch (error: unknown) {
        console.log(error);
    }
}


async function deleteTask(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const deletedTask = await taskServices.deletedTask(id);
        res.json(deletedTask);
    } catch (error: unknown) {
        console.log(error);        
    }
}

export const taskControllers = {
    createTask,
    getTasks,
    getTaskById,
    updateTaskData,
    updateTaskStatus,
    deleteTask
}