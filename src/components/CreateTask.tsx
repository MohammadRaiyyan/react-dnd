import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { Task } from "../api/data";
import setTask from "../api/setTask";

function CreateTask({
  groupId,
  showModal,
  setShowModal,
  onSuccess,
}: {
  groupId: string;
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  onSuccess: () => void;
}) {
  const [newTask, setNewTask] = useState<Omit<Task, "id">>({
    description: "",
    title: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOnChange = useCallback(
    ({
      target: { value, name },
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setNewTask((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    },
    []
  );

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        setIsSubmitting(true);
        await setTask(newTask, groupId);
        setNewTask({ description: "", title: "" });
        onSuccess();
        setShowModal(false);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [newTask, groupId, onSuccess]
  );
  return (
    <dialog open={showModal} onClick={() => setShowModal(false)}>
      <div onClick={(e) => e.stopPropagation()} className="form-wrapper">
        <div className="form-header">
          <h2>Create Task</h2>
        </div>
        <form onSubmit={onSubmit} className="group-form">
          <div>
            <label htmlFor="title">Task Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Wash clothes"
              value={newTask.title}
              onChange={handleOnChange}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="desc">Description</label>

            <textarea
              name="description"
              id="desc"
              value={newTask.description}
              onChange={handleOnChange}
              rows={5}
              disabled={isSubmitting}
              placeholder="description..."
            ></textarea>
          </div>

          <button className="btn-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create"}
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default CreateTask;
