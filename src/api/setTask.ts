import callApi from "./callApi";
import { data, Task } from "./data";

export default async function setTask(task: Omit<Task, "id">, groupId: string): Promise<boolean> {
    const newTask: Task = {
        id: new Date().setMilliseconds.toString(),
        ...task
    }
    const res = await callApi<boolean>(() => {
        data.forEach(group => {
            if (group.id === groupId) {
                group.tasks.push(newTask);
                return;
            }
        })
        return true;
    })

    return res;
}