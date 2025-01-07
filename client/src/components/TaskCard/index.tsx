import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="mb-5 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white">
      {task.attachments && task.attachments.length > 0 && (
        <div>
          <strong>Attachments:</strong>
          {task.attachments && task.attachments.length > 0 && (
            <Image
              src={`/${task.attachments[0].fileURL}`}
              alt={`/${task.attachments[0].fileName}`}
              width={400}
              height={200}
              className="rounded-md"
            />
          )}
        </div>
      )}
      <p>
        <strong>ID:</strong>
        {task.id}
      </p>
      <p>
        <strong>Title:</strong> {task.title}
      </p>
      <p>
        <strong>Description:</strong>{" "}
        {task.description ? task.description : "No description provided"}
      </p>
      <p>
        <strong>Status:</strong>
        {task.status}
      </p>
      <p>
        <strong>Tags:</strong> {task.tags ? task.tags : "No tags"}
      </p>
      <p>
        <strong>Start Date:</strong>
        {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
      </p>
      <p>
        <strong>End Date:</strong>
        {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
      </p>
    </div>
  );
};

export default TaskCard;
