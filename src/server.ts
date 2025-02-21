import express from 'express';
import { taskControllers }  from '@api/controllers/tasks-controllers';

const app = express();
const port = process.env.PORT || 3000;
const baseUrl = '/api/tasks';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post(`${baseUrl}`, taskControllers.createTask);

app.get(`${baseUrl}`, taskControllers.getTasks);
app.get(`${baseUrl}/:id`, taskControllers.getTaskById);

app.put(`${baseUrl}/:id`, taskControllers.updateTaskData);
app.put(`${baseUrl}/:id/status`, taskControllers.updateTaskStatus);

app.delete(`${baseUrl}/:id`, taskControllers.deleteTask);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});