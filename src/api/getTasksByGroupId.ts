import callApi from "./callApi";
import { data, Group } from "./data";

export default async function getTaskByGroupId({ id }: { id: string }): Promise<Group | null> {
    const res = await callApi<Group | null>(() => {
        return data.find(group => group.id === id) || null;
    });
    return res;
}
