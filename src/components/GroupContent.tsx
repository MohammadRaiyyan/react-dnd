import { memo } from "react";
import { Task } from "../api/data";

function GroupContent({ tasks = [] }: { tasks: Task[] }) {
  return (
    <>
      {tasks.map((gp) => (
        <div className="group-card" key={gp.id} draggable>
          <h3 className="group-card-title">{gp.title}</h3>
          <p>{gp.description}</p>
        </div>
      ))}
    </>
  );
}

export default memo(GroupContent);
