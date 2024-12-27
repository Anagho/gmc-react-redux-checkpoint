import { useState } from "react";
import { Modal, Checkbox, Button } from "antd";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskStatus } from "../features/task/taskSlice";
import EditTask from "./EditTask";
import { DeleteOutlined, CheckOutlined, UndoOutlined } from "@ant-design/icons";

const Task = ({ task }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.task_id));
    setIsDeleteModalOpen(false);
  };

  const toggleDoneStatus = () => {
    dispatch(toggleTaskStatus(task.task_id));
  };

  return (
    <div
      className={`border-b p-3 mb-2 flex justify-between shadow-lg rounded-md ${
        task.isDone ? "line-through text-gray-600 bg-green-300" : ""
      }`}
    >
      <div className="flex gap-2">
        {/* <Checkbox
          checked={task.isDone}
          onChange={toggleDoneStatus}
          className="task-checkbox"
          title="Toggle Done Status"
        /> */}
        <div className="text-left">
          <p className="font-medium tracking-wide text-gray-800 leading-7">{task.description}</p>
          <p className="text-gray-500 font-light text-sm">{task.createdAt}</p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        {!task.isDone && (
          <Button
            icon={<CheckOutlined />}
            onClick={() => toggleDoneStatus(task.task_id)}
            title="Complete Task"
          />
        )}
        {task.isDone && (
          <Button
            icon={<UndoOutlined />}
            onClick={() => toggleDoneStatus(task.task_id)}
            title="Undo Task"
          />
        )}
        <EditTask taskId={task.task_id} description={task.description} />

        <Button
          icon={<DeleteOutlined className="text-red-500" />}
          onClick={() => setIsDeleteModalOpen(true)}
          title="Delete Task"
        />
      </div>

      {/* Delete confirmation modal */}
      <Modal
        title="Delete Task"
        open={isDeleteModalOpen}
        onOk={handleDelete}
        onCancel={() => setIsDeleteModalOpen(false)}
      >
        <p>Are you sure you want to delete this task?</p>
      </Modal>
    </div>
  );
};

export default Task;
