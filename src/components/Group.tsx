import { useMemo, useState } from "react";
import { Group as GroupType } from "../api/data";
import getTaskByGroupId from "../api/getTasksByGroupId";
import useFetch from "../hook/useFetch";
import CreateTask from "./CreateTask";
import GroupContent from "./GroupContent";

type GroupProps = {
  title: string;
  id: string;
};

function Group({ title, id }: GroupProps) {
  const memoizedParams = useMemo(() => ({ id }), [id]);
  const { data, loading, refetch } = useFetch<GroupType | null, { id: string }>(
    {
      fetcher: getTaskByGroupId,
      params: memoizedParams,
    }
  );
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      data-name={`group-${id}`}
      className={`group group-${id}`}
      onDragOver={(e) => console.log("event", e)}
    >
      <div className="group-header">
        <h2>{title}</h2>
        <button
          className="create-task"
          onClick={() => setShowModal(!showModal)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
          </svg>
        </button>
      </div>
      <div className="group-content">
        {loading ? "Loading..." : <GroupContent tasks={data?.tasks || []} />}
        {data && data.tasks.length === 0 && (
          <div className="group-zero-state">
            <h3>No data found</h3>
            <p>There is no data available for this section</p>
          </div>
        )}
      </div>
      <CreateTask
        groupId={id}
        setShowModal={setShowModal}
        showModal={showModal}
        onSuccess={refetch}
      />
    </div>
  );
}

export default Group;
