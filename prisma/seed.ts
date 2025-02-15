import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const taskData: Prisma.TaskCreateInput[] = [
    {
        title: "Walk the Dog",
        description: "Go for a walk with Jimmy",
        startDate: new Date(2025, 7, 26, 15, 0, 0, 0).toString()
    },
    {
        title: "Get a hair cut",
        startDate: new Date(2025, 8, 27, 15, 0, 0, 0).toString(),
        dueDate: new Date(2025, 8, 28, 15, 0, 0, 0).toString()
    },
    {
        title: "Buy groceries",
        description: "Buy milk, eggs and butter",
        startDate: new Date(2025, 6, 25, 15, 0, 0, 0).toString()
    }
];

async function main(option: number) {
    switch (option) {
        case 0:
            console.log(`Initializing seed...`);

            for (const t of taskData) {
                const task = await prisma.task.create({
                    data: t
                });
        
                console.log(`Created task: ${task.title} - with id: ${task.id}`);
            }
        
            console.log(`Seeding finished!`);
            break;
        case 1:
            console.log(`Deleting database records...`)
            const deletedTasks = await prisma.task.deleteMany({});
            console.log(`Deleted ${deletedTasks.count} tasks.`);
            break;
        default:
            break;
    }
}

main(0)
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });